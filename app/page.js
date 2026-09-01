import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="w-full">
          <section className="grid grid-cols-2 h-[80vh] w-full">
            <div className="text flex items-center justify-center">
              <p className="text-4xl">Best Url Shortner in The Market.</p>
            </div>
            <div className="cat relative w-full">
              <Image
                src={"/coolCat2.png"}
                fill
                sizes=""
              />
            </div>
          </section>

        </main>
      </div>
  );
}
