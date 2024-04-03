"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [header, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle navbar
  const pathname = usePathname();

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle nilai state isOpen
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader); // Menghapus event listener saat komponen dibongkar
    };
  }, []);

  return (
    <>
      <div
        className={
          header
            ? "fixed z-50 bg-white shadow-sm top-0 w-full py-2"
            : "bg-transparent pt-4"
        }
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"} className="flex-shrink-0">
            <Image src={"/icon/Logo.svg"} alt="Logo" width={160} height={160} />
          </Link>
          <div className="md:hidden">
            {/* Tombol toggle navbar hanya muncul di layar kecil */}
            <button className="focus:outline-none" onClick={toggleNavbar}>
              {/* Icon untuk toggle */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Menampilkan menu di layar md ke atas */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block md:flex gap-8 items-center justify-end`}
          >
            <Link
              href={"/"}
              className={`${
                pathname === "/" ? "active text-hijau font-bold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href={"/services"}
              className={`${
                pathname === "/services" ? "active text-hijau font-bold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href={"/portfolio"}
              className={`${
                pathname === "/portfolio" ? "active text-hijau font-bold" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href={"/artikel"}
              className={`${
                pathname === "/artikel" ? "active text-hijau font-bold" : ""
              }`}
            >
              Article
            </Link>
            <Link
              href={"/industry"}
              className={`${
                pathname === "/industry" ? "active text-hijau font-bold" : ""
              }`}
            >
              Industry
            </Link>
            <Link
              href={"/about"}
              className={`${
                pathname === "/about" ? "active text-hijau font-bold" : ""
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
