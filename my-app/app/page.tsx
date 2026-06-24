import Image from "next/image";
import Hero from "@/components/Hero"
import ImageGallery from "@/components/ImageGallery";
import LookBookSection from "@/components/LookBook";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageGallery />
      <LookBookSection />
    </main>
  );
}
