// lib/verifySignature.ts
import { PublicKey } from "@solana/web3.js";
import bs58 from "bs58";
import nacl from "tweetnacl";

export function verifySignature(wallet: string, message: string, signature: string): boolean {
  const pubKey = new PublicKey(wallet).toBytes();
  const msg = new TextEncoder().encode(message);
  const sig = bs58.decode(signature);
  return nacl.sign.detached.verify(msg, sig, pubKey);
}
