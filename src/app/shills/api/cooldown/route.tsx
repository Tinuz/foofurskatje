import { NextRequest, NextResponse } from "next/server";
// Importeer je KV client, bijvoorbeeld voor @upstash/kv:
import { kv } from '@/app/lib/kv';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const wallet = searchParams.get("wallet");

  if (!wallet) {
    return NextResponse.json({ error: "Missing wallet address" }, { status: 400 });
  }

  try {
    // Haal de cooldown timestamp op uit de KV store
    const key = `cooldown:${wallet}`;
    const lastInsert = await kv.get<number>(key);
    const nextBurnTimestamp = lastInsert ? lastInsert + 1000 * 60 * 60 * 1 : Date.now();
    console.log(`Cooldown for ${wallet}: ${nextBurnTimestamp}`);

    return NextResponse.json({
      nextBurnTimestamp: nextBurnTimestamp
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch cooldown", err }, { status: 500 });
  }
}