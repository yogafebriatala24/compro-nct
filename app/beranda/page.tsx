import Navbar from "@/components/Navbar/pages";
import Banner from "./Banner/page";

export default function Beranda() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Banner />
      </div>
    </>
  );
}
