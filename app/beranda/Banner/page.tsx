import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css";

export default function Banner() {
  return (
    <>
      <div className="flex flex-wrap mt-10">
        <div className="self-center md:hidden animate__pulse__repeat-2">
          <Image
            src={"/img/banner.svg"}
            alt="banner-nct"
            width={400}
            height={100}
            className="mx-auto px-2 "
          />
        </div>
        <div className="self-center md:w-1/2 max-md:text-center">
          <h1 className="text-hijau md:text-4xl text-2xl font-bold">
            Nusa Cita Teknologi
          </h1>
          <p className="text-secondary text-base font-light mt-7 leading-7 mb-7">
            Welcome to Nusa Cita Technology, where we specialize in developing
            customized software solutions to meet your business needs. With a
            focus on innovation and customer satisfaction, we are ready to help
            you achieve success with reliable and competitive solutions. Join us
            to experience the difference we offer in accelerating the growth of
            your business.
          </p>
          <Link
            href={""}
            className="bg-gradient-to-r from-hijau to-kuning  text-white font-semibold text-base text-center px-6 py-2 rounded-lg hover:bg-transparent hover:border-white"
          >
            Project With Us
          </Link>
        </div>
        <div className="self-center w-1/2 max-md:hidden">
          <Image
            src={"/img/banner.svg"}
            alt="banner-nct"
            width={500}
            height={100}
            className="ms-auto"
          />
        </div>
      </div>
    </>
  );
}
