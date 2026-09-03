"use client"

import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
    const [generatedURL, setGeneratedURL] = useState("")


    return (
        <div className="flex flex-1 flex-col">
            <section className="grid grid-cols-2 h-[82vh]">

                <div className="inputs w-full flex flex-col">

                    <div className="h-[22%] flex items-end justify-center">
                        <h2 className="text-2xl font-poppin font-bold">Generate your short URLs</h2>

                    </div>
                    <div className="w-full h-[60%] flex flex-col items-center justify-center gap-4">
                        <input type="text" placeholder="Enter URL Here"
                            className="w-[50%] bg-gray-900 border-2 border-blue-400 rounded-md font-popp px-2 py-px"
                        />
                        <input type="text" placeholder="Enter your preffered short URL text"
                            className="w-[50%] bg-gray-900 border-2 border-blue-400 rounded-md font-popp px-2 py-px"
                        />
                        <div className="generate w-full flex items-center justify-center">
                            <button className="w-[50%] bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg text-black cursor-pointer font-bold">Generate</button>
                        </div>

                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="w-[50%] bg-gray-900 h-30 p-2 rounded-xl text-center">
                                <span className="font-bold underline">Generated Link</span>
                                <code>{generatedURL}</code>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="history w-full flex flex-col h-full">
                    <div className="History-text h-[22%] flex items-end justify-center">
                        <h2 className="text-2xl font-poppin font-bold">History</h2>
                    </div>
                    <div className="h-[78%] w-full py-10 px-20 border rounded-xl">
                        <div className="w-full h-100 overflow-hidden">
                            <ul className="h-full list-disc list-inside marker:text-blue-400 marker:text-2xl overflow-y-scroll scrollbar-none">
                                <li className="list-none text-center">
                                    <span className="text-blue-400 font-bold">-- Start -- </span>
                                </li>
                               <li className="text-sm">
                                <Link href={"https://localhost:3000/google"}>https://localhost:3000/google</Link>
                                </li>
                                <li className="list-none text-center">
                                    <span className="text-red-400 font-bold">-- End -- </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Shorten;