import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-24 bg-[#1b1b1b] flex justify-between px-3 items-center text-white">
      <div className="logo w-24">
        <Link href="/" className="flex gap-2 items-center ">
          <Image src="/logo.png" alt="logo" width={130} height={130} />
          <h2 className="text-4xl">Linkly</h2>
        </Link>
      </div>
      <ul className="flex justify-center items-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/generate">
            <button className="bg-white text-black shadow-lg p-3 rounded-lg py-2 font-semibold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-white text-black shadow-lg p-3 rounded-lg py-2 font-semibold">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
