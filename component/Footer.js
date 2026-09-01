const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="h-15 flex items-center justify-evenly text-gray-300">
            <p>&copy; {year} JiriLink. All rights reserved.</p>
            <div className="space-x-2">
                <span className="text-red-500">&hearts;</span>
                <span>Akki</span>
            </div>
        </footer>
    )
}

export default Footer;