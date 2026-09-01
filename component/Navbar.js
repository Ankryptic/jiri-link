import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="h-15 flex items-center justify-between px-4 py-1">
            <div className="logo flex items-center text-2xl text-blue-400 font-bold">
                <span>Jiri</span>
                <span>Link</span>
            </div>
            <div className="links flex items-center gap-5 text-gray-400 font-semibold text-sm">
                <ul className="flex items-center gap-3">
                    <Link href={"/"} className="hover:text-blue-400"><li>Home</li></Link>
                    <Link href={"/shorten"} className="hover:text-blue-400"><li>Shorten</li></Link>
                    <Link href={"/about"} className="hover:text-blue-400"><li>About</li></Link>
                    <Link href={"/contact"} className="hover:text-blue-400"><li>Contact US</li></Link>
                </ul>
                <div className="button flex items-center gap-2">
                    <Link href={"/login"} className="bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-md text-black">Login</Link>
                    <Link href={"/signup"} className="bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-md text-black">Signup</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
