import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="w-full">
          <section className="grid grid-cols-2 h-[80vh] w-full">
            <div className="text flex flex-col gap-5 items-center justify-center">
              <p className={`text-4xl font-poppin font-bold`}>Best Url Shortner in The Market.</p>
              <div className="buttons flex items-center gap-4">
                <Link href={"/shorten"} className="bg-blue-400 hover:bg-blue-300 text-lg font-semibold px-4 py-1 rounded-md text-black">Try Now</Link>
                <Link href={"https://github.com/Ankryptic/jiri-link"} target="_blank" className="bg-blue-400 hover:bg-blue-300 text-lg font-semibold px-4 py-1 rounded-md text-black">Github</Link>
              </div>
            </div>
            <div className="cat relative w-full">
              <Image
                src={"/coolCat2.png"}
                fill
                sizes=""
                alt="hero-cat"
              />
            </div>
          </section>

        </main>
      </div>
  );
}
