import { randomInt } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"

export async function POST(req: NextRequest) {


  const sessionId = uuidv4()
  const code = randomInt(10000);

  console.log(`Creating new session with id ${sessionId} and code ${code}`)

  return NextResponse.json({ id: sessionId, code })
}
