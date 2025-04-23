// Page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-white">
      <section className="bg-gradient-to-b from-zinc-800 to-zinc-900 grid grid-cols-2 h-[70vh]">
        <div className="flex flex-col gap-7  justify-center px-10">
          <h1 className={`lg:text-6xl text-4xl font-semibold `}>
            Shrink your links. Amplify your reach.
          </h1>
          <p className="">
            Welcome to our URL Shortener! Simplify your links and boost your
            online presence with our intutive platform.
          </p>
          <div className="button  ">
            <Link href="/generate">
              <button className="bg-white text-black shadow-lg rounded-full py-2 px-7">
                Generate
              </button>
            </Link>
          </div>
        </div>
        <div className="second relative ">
          <div className="img absolute bottom-0 right-0 w-96 lg:w-[34rem] ">
            <Image
              src={"/triangle.png"}
              height={700}
              width={700}
              alt="triangle"
            />
          </div>
          <div className="circle absolute bottom-30 z-10 right-[30%] bg-white h-64 w-64 lg:h-72 lg:w-72 rounded-full"></div>
          <div className="circle absolute bottom-16 right-[18%] bg-black h-52 w-52 lg:h-60 lg:w-60 rounded-full"></div>
          <div className="circle absolute bottom-4 z-10 right-[4%] bg-white h-20 w-20 lg:h-28 lg:w-28 rounded-full"></div>
          {/* <div className="circle absolute flex items-end text-black justify-center  -bottom-32 right-[60%] bg-transparent border border-black h-48 w-48 lg:h-56 lg:w-56 rounded-full">
            {" "}
            TEXT
          </div> */}
        </div>
      </section>
      <section className="grid lg:grid-cols-3 grid-cols-2 lg:px-40 px-10 gap-6 my-32">
        <div className="box flex flex-col justify-center gap-5 text-black border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-semibold text-2xl">Streamlined URL</h3>
          <p className="text-gray-700">
            Say goodbye to long unmanageable links. Our URL shortener makes it
            easy to create custom , memorable short URLs that pack a punch.
          </p>
        </div>
        <div className="box flex flex-col justify-center gap-5 text-black border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-semibold text-2xl">Customize with Ease</h3>
          <p className="text-gray-700">
            Personalize your short URLs to match your brand preference. Our
            Intuitive interface empowers you to take control of your online
            identity.
          </p>
        </div>
        <div className="box flex flex-col justify-center gap-5 text-black border border-gray-200 p-5 rounded-lg shadow-sm">
          <h3 className="font-semibold text-2xl">Shortened URLs</h3>
          <p className="text-gray-700">
            Elevate your digital presence with our powerful URL shortening tool
            transform long, cumbersome links into concise, shareable assets that
            leave a lasting
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-zinc-800 to-zinc-900 grid grid-cols-2 h-[56vh]">
        <div className="flex flex-col gap-7  justify-center px-10">
          <h1 className={`lg:text-6xl text-4xl font-semibold  `}>
            Unleash the
          </h1>
          <p className="">
            We are the most straightforward URL Shortener in the world. Most{" "}
          </p>
          <div className="button  ">
            <Link href="/generate">
              <button className="bg-white text-black shadow-lg rounded-full py-2 px-7">
                Shorten it
              </button>
            </Link>
          </div>
        </div>
        <div className="second relative ">
          <div className="img absolute bottom-0 right-0 w-96 lg:w-[28rem] ">
            <Image
              src={"/triangle.png"}
              height={700}
              width={700}
              alt="triangle"
            />
          </div>
          <div className="circle absolute bottom-10 right-[26%] bg-white h-64 w-64 lg:h-72 lg:w-72 rounded-full"></div>
          <div className="circle absolute bottom-30 z-10 right-[19%] bg-black h-52 w-52 lg:h-60 lg:w-60 rounded-full"></div>
          {/* <div className="circle absolute bottom-64 z-10 right-[14%] border-2 border-white h-28 w-28 lg:h-28 lg:w-28 rounded-full"></div> */}
        </div>
      </section>
    </main>
  );
}
