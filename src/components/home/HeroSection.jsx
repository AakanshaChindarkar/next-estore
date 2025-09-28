import Container from "../Container";
import Slider from "./Slider";
import styles from "@/styles/home/herosection.module.css";
import Link from "next/link";
export default function HeroSection() {
  return (
    <Container>
      <section className="flex justify-between items-center pt-20">
        {/* Banner Text part */}
        <div className={`${styles.textSection} text-gray-700`}>
          <h1>
            One stop solution <span className="text-pink-500">E-store</span>
          </h1>
          <p>
            Discover the latest headphones, earphones, mobiles, tablets, etc.
          </p>
          <p className="mb-4">Exclusive deals just for you!</p>
          <Link className={`${styles.ctaButton} mt-4`} href="/store">
            Shop Now
          </Link>
        </div>
        {/* Image Slider */}
        <Slider />
      </section>
    </Container>
  );
}
