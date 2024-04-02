"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="bg-white pt-4">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center">
            <Image src={"/icon/Logo.svg"} alt="Logo" width={160} height={160} />
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
