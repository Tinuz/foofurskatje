import { verifySignature } from '@/app/lib/VerifySignature';
import { Connection, PublicKey, Keypair, VersionedTransaction, TransactionMessage } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, createTransferInstruction } from '@solana/spl-token';
import { NextResponse } from 'next/server';
import bs58 from 'bs58';
import { sendDiscordMessage } from '@/app/lib/discord';

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

    try {
      // Treasury ATA (bron)
      const treasuryATA = await getOrCreateAssociatedTokenAccount(
        connection,
        TREASURY,
        FOOF_CA,
        TREASURY.publicKey
      );

      // Doelwallet ATA (ontvanger)
      const userPublicKey = new PublicKey(wallet);
      const userATA = await getOrCreateAssociatedTokenAccount(
        connection,
        TREASURY,
        FOOF_CA,
        userPublicKey
      );

      console.log("Treasury ATA:", treasuryATA.address.toBase58());
      console.log("User ATA:", userATA.address.toBase58());

      const blockhash = await connection.getLatestBlockhash();
      if (!blockhash) {
        return NextResponse.json({ error: "Failed to fetch blockhash" }, { status: 500 });
      }

      // 100 tokens (6 decimals)
      const amountToSend = 100;
      const decimals = 6;
      const rawAmount = BigInt(amountToSend * 10 ** decimals);

      const transferInstruction = createTransferInstruction(
        treasuryATA.address, // from
        userATA.address,     // to
        TREASURY.publicKey,  // owner
        Number(rawAmount)    // amount
      );

      const messageV0 = new TransactionMessage({
        payerKey: TREASURY.publicKey,
        recentBlockhash: blockhash.blockhash,
        instructions: [
          transferInstruction
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

        await sendDiscordMessage(`📢 **Reward distributed!**\nWallet: ${wallet}\nRecieved 100 $FOOF\n for completing a task`, "reward");
        return NextResponse.json({ success: true, tx: txid });

      } catch (err) {
        console.log("Error while sending transaction:", err);
        return NextResponse.json({ error: "Transaction failed" }, { status: 500 });
      }
    } catch (err) {
      return NextResponse.json({ error: "Transfer failed", err }, { status: 500 });
    }
  } catch (err) {
    console.log("Fout bij verwerken request:", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
