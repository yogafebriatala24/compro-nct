"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [openToggle, setOpenToggle] = useState(false);
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <>
      <div
        className={
          header
            ? "fixed z-50 bg-white pt-4 shadow-sm top-0 w-full py-2 max-md:hidden"
            : "bg-transparent pt-2 max-md:hidden"
        }
      >
        <div className="container mx-auto">
          <div className="flex gap-8 items-center">
            <Link href={"/"}>
              <Image
                src={"/icon/Logo.svg"}
                alt="Logo"
                width={160}
                height={160}
              />
            </Link>
            <Link
              href={"/"}
              className={`${
                pathname === "/"
                  ? "active ms-auto text-hijau font-bold"
                  : "ms-auto"
              }`}
            >
              Home
            </Link>
            <Link
              href={"/services"}
              className={`${
                pathname === "/services" ? "active  text-hijau font-bold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href={"/portfolio"}
              className={`${
                pathname === "/portfolio" ? "active  text-hijau font-bold" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href={"/artikel"}
              className={`${
                pathname === "/artikel" ? "active  text-hijau font-bold" : ""
              }`}
            >
              Article
            </Link>
            <Link
              href={"/industry"}
              className={`${
                pathname === "/industry" ? "active  text-hijau font-bold" : ""
              }`}
            >
              Industry
            </Link>
            <Link
              href={"/about"}
              className={`${
                pathname === "/about" ? "active  text-hijau font-bold" : ""
              }`}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
