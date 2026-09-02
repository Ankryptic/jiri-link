const Shorten = () => {
    return (
        <div className="flex flex-1 flex-col">
            <section className="grid grid-cols-2 h-[82vh]">

                <div className="inputs w-full flex flex-col">

                    <div className="h-[40%] flex items-center justify-center">
                        <h2 className="text-2xl font-poppin font-bold">Generate your short URLs</h2>

                    </div>
                    <div className="w-full h-[60%] flex flex-col items-center gap-4">
                        <input type="text" placeholder="Enter URL Here"
                            className="w-[50%] bg-gray-900 border-2 border-blue-400 rounded-md font-popp px-2 py-px"
                        />
                        <input type="text" placeholder="Enter your preffered short URL text"
                            className="w-[50%] bg-gray-900 border-2 border-blue-400 rounded-md font-popp px-2 py-px"
                        />
                        <div className="generate w-full flex items-center justify-center">
                            <button className="w-[50%] bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg text-black cursor-pointer font-bold">Generate</button>
                        </div>
                    </div>
                </div>

                <div className="history  w-full bg-blue-900 h-full"></div>

            </section>
        </div>
    )
}

export default Shorten;