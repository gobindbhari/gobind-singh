import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import WhatsAppbtn from "@/components/WhatsAppbtn";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <Skills/>
   <Project/>
   <Footer/>
   <WhatsAppbtn/>
   </>
  );
}
