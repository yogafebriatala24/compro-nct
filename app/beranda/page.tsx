import Navbar from "@/components/Navbar/pages";
import Banner from "./Banner/page";
import Services from "./Services/page";
import Why from "./Why/page";
import Contact from "./Contact/page";
import Footer from "@/components/Footer/page";
import "animate.css";

export default function Beranda() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto md:px-20 px-4">
        <Banner />
        <Services />
        <Why />
        {/* <News /> */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}
