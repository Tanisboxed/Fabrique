import Image from "next/image";
import HeaderTop from "./components/HeaderTop";
import Hero from "./components/Hero";
import Newarrivals from "./components/Newarrivals";
import Category from "./components/Category";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const getData = async()=>{

}


export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Reviews />
      <Footer />
    </main>
  );
}
