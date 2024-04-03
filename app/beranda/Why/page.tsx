import Image from "next/image";
import Link from "next/link";

export default function Why() {
  return (
    <>
      <div className="flex mt-10 mb-20">
        <div className="w-1/2 self-center">
          <Image src={"/img/why.svg"} alt="why" width={300} height={200} />
        </div>
        <div className="self-center w-1/2 ">
          <h2 className="font-semibold text-3xl text-hijau">Why Choose Us?</h2>
          <Image
            src={"/icon/line.svg"}
            alt="line"
            width={100}
            height={10}
            className="pt-3"
          />
          <p className="text-secondary text-base font-light mt-7 leading-7 mb-7">
            Nusa Cita Technology offers deep expertise, a collaborative
            approach, and high quality in software development. We consistently
            innovate and stay abreast of the latest trends in the technology
            industry, while also providing professional post-sales support. With
            a trusted reputation, we are ready to be your reliable technology
            partner to meet your software development needs.
          </p>
          <Link
            href={""}
            className="bg-gradient-to-r from-hijau to-kuning  text-white font-semibold text-base text-center px-6 py-2 rounded-lg hover:bg-transparent hover:border-white"
          >
            Portfolio Us
          </Link>
        </div>
      </div>
    </>
  );
}
