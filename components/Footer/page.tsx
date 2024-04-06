import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r from-hijau to-kuning w-full py-10">
        <div className="container mx-auto">
          <p className="text-white font-normal text-sm">
            Copyright © 2024 - All right reserved by{" "}
            <span className="underline">
              <Link href={"/"}>PT Nusa Cita Teknologi</Link>
            </span>
          </p>
          <div className="md:flex pt-5 gap-5">
            <Image src={"/icon/ig.svg"} width={38} height={10} alt="ig" />
            <Image src={"/icon/linkedin.svg"} width={38} height={10} alt="ig" />
            <Image src={"/icon/wa.svg"} width={38} height={10} alt="ig" />
          </div>
        </div>
      </div>
    </>
  );
}
