import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/pages";
import Image from "next/image";

export default function Artikel() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto md:px-20 px-4 mt-10">
        <div className="grid  grid-rows-2 grid-cols-4 gap-3">
          <div className="row-span-2 col-span-2">
            <div className="w-full h-72 md:h-[396px] relative shrink-0 rounded-lg">
              <Image
                src={"/img/tech.jpg"}
                alt="konten"
                fill
                className="object-cover rounded-lg h-full"
              />
              <div className="absolute top-0 right-0 p-2 bg-gradient-to-r from-hijau to-kuning text-white rounded-tr-lg rounded-bl-lg w-28 flex justify-center items-center">
                <span className="text-xs font-semibold">AI</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent rounded-lg text-white">
                <h2 className="text-xl font-semibold">Judul Gambar</h2>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-2">
            <div className="md:w-full md:h-48 w-32 h-24 relative md:shrink-0 mb-3 ">
              <Image
                src={"/icon/py.webp"}
                alt="konten"
                fill
                className="object-cover rounded-lg h-48 relative"
              />
              <div className="absolute top-0 right-0 max-md:hidden p-2 bg-gradient-to-r from-hijau to-kuning text-white flex justify-center items-center rounded-tr-lg rounded-bl-lg w-28">
                <span className="text-xs font-semibold">Startup</span>
              </div>
              <div className="max-md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent rounded-lg text-white">
                <h2 className="text-xl font-semibold">Judul Gambar</h2>
              </div>
            </div>
            <div className="md:w-full md:h-48 w-32 h-24 relative shrink-0">
              <Image
                src={"/icon/py.webp"}
                alt="konten"
                fill
                className="object-cover rounded-lg h-48 relative"
              />
              <div className="absolute top-0 right-0 p-2 max-md:hidden bg-gradient-to-r from-hijau to-kuning flex text-white justify-center items-center rounded-tr-lg rounded-bl-lg w-28">
                <span className="text-xs font-semibold">Teknologi</span>
              </div>
              <div className="max-md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent rounded-lg text-white">
                <h2 className="text-xl font-semibold">Judul Gambar</h2>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-1">
            <div className="md:w-full md:h-48 w-32 h-24 relative md:shrink-0 mb-3 ">
              <Image
                src={"/icon/py.webp"}
                alt="konten"
                fill
                className="object-cover rounded-lg h-48 relative"
              />
              <div className="absolute top-0 right-0 max-md:hidden p-2 bg-gradient-to-r from-hijau to-kuning text-white flex justify-center items-center rounded-tr-lg rounded-bl-lg w-28">
                <span className="text-xs font-semibold">Startup</span>
              </div>
              <div className="max-md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent rounded-lg  text-white">
                <h2 className="text-xl font-semibold">Judul Gambar</h2>
              </div>
            </div>
            <div className="md:w-full md:h-48 w-32 h-24 relative shrink-0">
              <Image
                src={"/icon/py.webp"}
                alt="konten"
                fill
                className="object-cover rounded-lg h-48 relative"
              />
              <div className="absolute top-0 right-0 p-2 max-md:hidden bg-gradient-to-r from-hijau to-kuning flex text-white justify-center items-center rounded-tr-lg rounded-bl-lg w-28">
                <span className="text-xs font-semibold">Teknologi</span>
              </div>
              <div className="max-md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent rounded-lg text-white">
                <h2 className="text-xl font-semibold">Judul Gambar hallo</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-hijau">Artikel Terbaru </h2>
          <Image
            src={"/icon/line.svg"}
            alt="line"
            width={100}
            height={10}
            className="pt-2 mb-4"
          />{" "}
          <div className="flex gap-5 items-center">
            <div className="flex md:w-32 w-32">
              <div className="w-full md:h-28 h-16 relative shrink-0">
                <Image
                  src={"/img/tech.jpg"}
                  alt="konten"
                  fill
                  className="object-cover rounded-lg h-full"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-black font-semibold md:text-lg text-xs">
                Pemanfaatan Bahasa Python Dalam Artificial Intelligence
              </h4>
              <p className="text-xs text-secondary mt-2">3 April 2024</p>
            </div>
            {/* <div className="">
              <h2 className="text-hijau text-lg font-semibold">Kategori</h2>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
