"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/slider/slide1.jpg", title: "Mechanical Works" },
  { src: "/slider/slide2.jpg", title: "Civil Works" },
  { src: "/slider/slide3.jpg", title: "Painting Works" },
  { src: "/slider/slide4.jpg", title: "Industrial Support" },
  { src: "/slider/slide5.jpg", title: "Safety Inspections" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full">
      <div className="relative h-[260px] sm:h-[380px] lg:h-[460px] bg-black">
        <Image
          src={slides[current].src}
          alt={slides[current].title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute left-6 sm:left-16 top-1/2 -translate-y-1/2">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
            {slides[current].title}
          </h1>
          <p className="mt-2 text-white/90 text-sm sm:text-lg">
            OM GAYATHRI AGENCIES
          </p>
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/70 hover:bg-white text-xl font-bold"
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/70 hover:bg-white text-xl font-bold"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}