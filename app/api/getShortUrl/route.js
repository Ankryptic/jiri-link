import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const client = await clientPromise
        const db = client.db("jirilink");
        const collection = db.collection("shortURL")

        let allData = await collection.find({}).project({ _id: 0 }).toArray()

        return NextResponse.json(allData)
    } catch (error) {
        return NextResponse.json(
            {error: "Unable to Fetch!"},
            {status: 500}
        )
    }
}