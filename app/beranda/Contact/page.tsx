import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <div className="flex mt-10 mb-10">
        <div className="self-center w-1/2 ">
          <h2 className="font-semibold text-3xl text-hijau">Contact Us?</h2>
          <Image
            src={"/icon/line.svg"}
            alt="line"
            width={100}
            height={10}
            className="pt-3"
          />
          <form className="mt-10">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Name"
                className="shadow appearance-none border border-hijau rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email"
                className="shadow appearance-none border border-hijau rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <input
                type="number"
                placeholder="Phone"
                className="shadow appearance-none border border-hijau rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Subject"
                className="shadow appearance-none border border-hijau rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <textarea
                placeholder="Message"
                className="block shadow appearance-none border border-hijau rounded w-full p-2.5 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-gradient-to-r from-hijau to-kuning text-white font-semibold py-2 px-6 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 self-center">
          <Image
            src={"/img/contact-ic.svg"}
            alt="why"
            width={230}
            height={200}
            className="ms-auto"
          />
        </div>
      </div>
    </>
  );
}
