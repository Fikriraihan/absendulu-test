import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ListFilm from "@/components/list-film";
import { Navbar } from "@/components/navbar";
import { Button } from "antd";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <Hero />
      <ListFilm />

      <div className="w-full md:h-[300px] h-[64px]" />
      <Footer />
    </main>
  );
}
