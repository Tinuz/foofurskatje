import { verifySignature } from '@/app/lib/VerifySignature';
import { kv } from '@/app/lib/kv';
import { Connection, PublicKey, Keypair, VersionedTransaction, TransactionMessage } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, createBurnInstruction } from '@solana/spl-token';
import { NextResponse } from 'next/server';
import bs58 from 'bs58';
import { sendDiscordMessage } from '@/app/lib/discord';

const BURN_TOTAL_KEY = "foof:burned-total";

const connection = new Connection(process.env.SOLANA_RPC_URL!);
const FOOF_CA = new PublicKey(process.env.FOOF_CA!); // jouw mint address
const TREASURY = Keypair.fromSecretKey(bs58.decode(process.env.TREASURY!));

export async function POST(req: Request) {
  try {

    const data = await req.json();
    const { wallet, message, signatureBase58 } = data;
    if (!wallet || !signatureBase58 || !message) {
      return NextResponse.json({ error: "Missing params" }, { status: 400 });
    }

    if (!verifySignature(wallet, message, signatureBase58)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // Rate limiting
    const cooldownKey = `cooldown:${wallet}`;
    const lastInsert = await kv.get<number>(cooldownKey);
    const now = Date.now();
    if (lastInsert && now - lastInsert < 1000 * 60 * 60 * 24) {
      return NextResponse.json({ error: "Cooldown active" }, { status: 429 });
    }

    try {
      const treasuryATA = await getOrCreateAssociatedTokenAccount(
        connection,
        TREASURY,
        FOOF_CA,
        TREASURY.publicKey //8nqTE6Fm1StHbwfnJQ5oq55a8YGKH8C2Urvn1zwVUr2o
      );

      console.log("Treasury ATA:", treasuryATA.address.toBase58());

      const blockhash = await connection.getLatestBlockhash();
      if (!blockhash) {
        return NextResponse.json({ error: "Failed to fetch blockhash" }, { status: 500 });
      }

      const burnInstruction = await createBurnInstruction(
      treasuryATA.address, // Token account
      FOOF_CA, // Mint
      TREASURY.publicKey, // Owner
      13370000 // Amount
    );

      const messageV0 = new TransactionMessage({
        payerKey: TREASURY.publicKey,
        recentBlockhash: blockhash.blockhash,
        instructions: [
          burnInstruction
        ],
      }).compileToV0Message();

      const tx = new VersionedTransaction(messageV0);
      console.log("Transaction created:", tx);
      try {
        tx.sign([TREASURY]);
      } catch (err) {
        console.log("Error while signing transaction:", err);
        // Eventueel extra error handling of throw
      }

      try{
        const txid = await connection.sendTransaction(tx);
        await kv.set(cooldownKey, now, { ex: 60 * 60 * 24 });

        // Na succesvolle burn:
        const amountBurned = 13.37;
        const decimals = 6;
        const rawAmount = BigInt(amountBurned * 10 ** decimals); // bv. 13.37 * 10^6 = 13_370_000n

        // Update KV met optellen
        await kv.incrby(BURN_TOTAL_KEY, Number(rawAmount));

        //await sendDiscordMessage(`📢 **Reward distributed!**\nWallet: ${wallet} recieved 100 $FOOF\n for completing a taks`, "reward");
        await sendDiscordMessage(`📢 **New Task Retrieved!**\nWallet: ${wallet}\nBurned: 13.37 $FOOF from the treasury`, "burn");
       
        return NextResponse.json({ success: true, tx: txid });

      } catch (err) {
        console.log("Error while sending transaction:", err);
        return NextResponse.json({ error: "Transaction failed" }, { status: 500 });
      }
    } catch (err) {
      return NextResponse.json({ error: "Burn failed" }, { status: 500 });
    }
  } catch (err) {
    console.log("Fout bij verwerken request:", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
