import Container from "@/components/Container";
import FeaturedProducts from "@/components/home/FeaturedProduct";
import HeroSection from "@/components/home/HeroSection";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentlyAdded />
      <FeaturedProducts />
    </>
  );
}
