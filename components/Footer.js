import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-3 gap-7 content-start py-5 px-10 bg-white">
        <div className="name flex flex-col items-center justify-center">
          <div className="logo text-black flex flex-col gap-2 items-center justify-center mb-1">
            <Image
              className="invert"
              src={"/logo.png"}
              alt="logo"
              width={110}
              height={110}
            />
            <h2 className="text-3xl">Linkly</h2>
          </div>
          <p className="text-sm">&copy; 2025 Linkly , Inc.</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
        <div className="quick-links flex flex-col items-center gap-3">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href={"/"} className="text-sm">
            Home
          </Link>
          <Link href={"/"} className="text-sm">
            About
          </Link>
          <Link href={"/"} className="text-sm">
            Shorten
          </Link>
          <Link href={"/"} className="text-sm">
            Contact
          </Link>
        </div>
        <div className="connect flex flex-col items-center gap-3">
          <h3 className="font-semibold">Connect With Us </h3>
          <Link href={"/"} className="text-sm">
            Linkedin
          </Link>
          <Link href={"/"} className="text-sm">
            Github
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
