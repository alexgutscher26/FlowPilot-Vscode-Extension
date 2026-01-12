import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { prisma } from "@/lib/db"

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const email = session.user.email

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Delete the user (cascade deletes will handle related records)
    await prisma.user.delete({
      where: { id: user.id },
    })

    // Sign out the user
    await auth.api.signOut({
      headers: await headers(),
    })

    return NextResponse.json(
      {
        success: true,
        message: "Account successfully deleted",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error deleting user account:", error)
    return NextResponse.json({ error: "Failed to delete account" }, { status: 500 })
  }
}
