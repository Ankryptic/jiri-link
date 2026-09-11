import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function GET() {
    let cookieStore = await cookies()

    let userId = cookieStore.get("user_id")?.value

    // if userId is not available then assign one
    if(!userId){
        userId = randomUUID();

        cookieStore.set("user_id", userId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 365,  // 1 year expiration
            path: "/"
        });
    }

    return NextResponse.json({
        userId
    });
}