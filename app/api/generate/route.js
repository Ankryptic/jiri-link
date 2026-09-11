import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const req = await request.json()

        // connecting to database
        let client = await clientPromise
        let db = client.db("jirilink")
        let collection = db.collection("shortURL")

        // Data
        let data = {
            url: req.url,
            prefferedUrl: req.prefferedUrl
        }

        // Adding data to database
       await collection.insertOne( data )
        
        return NextResponse.json({
            success: true, 
            error: false, 
            message: "ShortURL created successfully",
            shortURL: `${process.env.NEXT_PUBLIC_URL}${data.prefferedUrl}`
        })

    } catch (error) {
        console.log(error)

        return NextResponse.json({
            success: false, 
            error: true, 
            Message: "Error Creating ShortURL"
        })
    }

}