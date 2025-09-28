"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // ✅ IMPORT NEXT.JS IMAGE
import styles from "@/styles/home/herosection.module.css";

export default function Slider() {
  const images = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // This is the modulus operator, which ensures the index wraps around when it reaches the end of the array. images.length is the total number of slides.
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((img, index) => (
          <Image
            alt={`Slider ${index + 1}`}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            src={img}
            key={index}
            fill // this makes the image cover the parent div
            style={{ objectFit: "contain" }} // adjust fit (cover/contain)
          />
        ))}
      </div>
    </div>
  );
}
