// /api/open-assignments/route.ts
import { kv } from '@/app/lib/kv';
import { NextRequest, NextResponse } from 'next/server';

type Insert = {
  id: string,
  wallet: string,
  questId: string,
  uniqueCode: string,
  proofUrl: string | null,
  status: string,
  createdAt: number
};

type Quest = {
  id: string,
  assignment: string,
}

export async function POST(req: NextRequest) {
  const { wallet } = await req.json();
  if (!wallet) return NextResponse.json({ open: [] });

  // Haal alle inserts van deze gebruiker op
  const user = await kv.get<{ inserts: string[] }>(`user:${wallet}`);
  if (!user || !user.inserts) return NextResponse.json({ open: [] });

  const open: { insertId: string; assignment: string; questId: string }[] = [];
  for (const insertId of user.inserts) {
    const insert = await kv.get<Insert>(`insert:${insertId}`);
    if (insert && insert.status === 'pending') {
      const quest = await kv.get<Quest>(`quest:${insert.questId}`);
      open.push({
        insertId: insert.id,
        assignment: quest?.assignment || "Onbekende opdracht",
        questId: quest?.id || "",
      });
    }
  }
  return NextResponse.json({ open });
}