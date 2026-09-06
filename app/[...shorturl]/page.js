import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function RedirectToURL({ params }) {
    const ShortUrl = (await params).shorturl

    const client = await clientPromise
    const db = await client.db("jirilink")
    const collection = await db.collection("shortURL")

    // Look for the URL using shorturl
    let data = await collection.findOne({
        prefferedUrl: ShortUrl[0]
    })

    if(!data){
        redirect("http://localhost:3000/")
    }

    let url = data.url

    // Checks if protocol is missing 
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }

    redirect(url)
}