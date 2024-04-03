import Navbar from "@/components/Navbar/pages";
import Banner from "./Banner/page";
import Services from "./Services/page";
import Why from "./Why/page";
import Contact from "./Contact/page";
import Footer from "@/components/Footer/page";
import News from "./News/page";

export default function Beranda() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20">
        <Banner />
        <Services />
        <Why />
        <News />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
