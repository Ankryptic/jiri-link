import { NextResponse } from "next/server";

export function POST(request){
    return NextResponse.json({
        success: true, error: false, message: "ShortURL created successfully"
    })
}