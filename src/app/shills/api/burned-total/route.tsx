import { kv } from "@/app/lib/kv";
import { NextResponse } from "next/server";

const BURN_TOTAL_KEY = "foof:burned-total";
const DECIMALS = 6;

export async function GET() {
  const raw = await kv.get<string>(BURN_TOTAL_KEY);
  const burned = raw ? parseInt(raw) : 0;
  const humanReadable = burned / 10 ** DECIMALS;

  return NextResponse.json({ burned: humanReadable });
}
