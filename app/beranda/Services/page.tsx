import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center font-semibold text-3xl text-hijau">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
          <div className="col-span-1 md:col-span-6 w-full bg-white shadow-lg rounded-lg px-6 py-6 hover:bg-gray-50">
            <Link href={""} legacyBehavior>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src={"/icon/web.svg"}
                    alt="web"
                    width={150}
                    height={90}
                  />
                </div>
                <div className="">
                  <h1 className="font-semi-bold text-lg text-black">
                    Web Development
                  </h1>
                  <p className="text-secondary text-sm mt-2 font-light">
                    With our website development service, we deliver solutions
                    that combine modern design with customizable functionality
                    tailored to your business needs. Our expert team will
                    collaborate with you to develop an attractive, responsive,
                    and user-friendly website that reflects your brand identity
                    and provides an outstanding user experience.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 md:col-span-6 w-full bg-white shadow-lg rounded-lg px-6 py-6 hover:bg-gray-50">
            <Link href={""} legacyBehavior>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src={"/icon/mobile.svg"}
                    alt="mobile"
                    width={150}
                    height={90}
                  />
                </div>
                <div className="">
                  <h1 className="font-semi-bold text-lg text-black">
                    Mobile App Development
                  </h1>
                  <p className="text-secondary text-sm mt-2 font-light">
                    We understand the importance of mobile presence in modern
                    business. With our mobile app development service, we help
                    you design and develop innovative, high-performance mobile
                    applications for both iOS and Android platforms. From
                    initial ideation to launch, we work diligently to ensure
                    your app not only meets technical expectations but also
                    delivers significant added value to your users.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 md:col-span-6 w-full bg-white shadow-lg rounded-lg px-6 py-6 hover:bg-gray-50">
            <Link href={""} legacyBehavior>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src={"/icon/ui.svg"}
                    alt="web"
                    width={150}
                    height={90}
                  />
                </div>
                <div className="">
                  <h1 className="font-semi-bold text-lg text-black">
                    UI/UX Designer
                  </h1>
                  <p className="text-secondary text-sm mt-2 font-light">
                    Good user experience (UX) and user interface (UI) design are
                    key to digital success. With our UI/UX design service, we
                    provide a holistic approach to designing engaging and
                    intuitive user experiences. Our design team combines
                    aesthetic design expertise with a deep understanding of user
                    interaction, ensuring that your product not only looks
                    beautiful but is also easy to use and efficient.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 md:col-span-6 w-full bg-white shadow-lg rounded-lg px-6 py-6 hover:bg-gray-50">
            <Link href={""} legacyBehavior>
              <div className="flex gap-3">
                <div className="">
                  <Image
                    src={"/icon/social.svg"}
                    alt="web"
                    width={150}
                    height={90}
                  />
                </div>
                <div className="">
                  <h1 className="font-semi-bold text-lg text-black">
                    Social Media Management
                  </h1>
                  <p className="text-secondary text-sm mt-2 font-light">
                    In the rapidly evolving digital era, a strong presence on
                    social media is crucial for building a successful brand.
                    With our social media management service, we help you manage
                    and optimize your brand presence across various social media
                    platforms. From content strategy to performance analysis, we
                    work to enhance your audience engagement, expand your brand
                    reach, and increase conversions to effectively achieve your
                    business goals.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
