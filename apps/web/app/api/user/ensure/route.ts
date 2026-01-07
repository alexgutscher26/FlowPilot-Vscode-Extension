import { NextResponse } from "next/server"
import { getTiDBPool } from "@/lib/tidb"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { id, email, name, image } = body || {}
    if (!id || !email) {
      return NextResponse.json({ ok: false, error: "missing id or email" }, { status: 400 })
    }
    const pool = getTiDBPool()
    await pool.query(
      `CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(64) PRIMARY KEY,
        email VARCHAR(255) UNIQUE,
        name VARCHAR(255),
        image VARCHAR(1024),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )`
    )
    await pool.query(
      `INSERT INTO users (id, email, name, image)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE name = VALUES(name), image = VALUES(image), updated_at = CURRENT_TIMESTAMP`,
      [id, email, name || null, image || null]
    )
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "error" }, { status: 500 })
  }
}
