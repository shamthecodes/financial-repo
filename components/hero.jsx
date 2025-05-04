"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BlurText from "@/reactbit/BlurText/BlurText";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          <BlurText
            text="Manage Your Finances"
            animateBy="words"
            delay={190}
            className="inline-block"
            animationFrom={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animationTo={[
              { filter: "blur(5px)", opacity: 0.6, y: 5 },
              { filter: "blur(0px)", opacity: 1, y: 0 },
            ]}
            stepDuration={0.4}
          />
          <br />
          <BlurText
            text="with Intelligence"
            animateBy="words"
            delay={190} // Slightly delayed for staggered effect
            className="inline-block"
            animationFrom={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animationTo={[
              { filter: "blur(5px)", opacity: 0.6, y: 5 },
              { filter: "blur(0px)", opacity: 1, y: 0 },
            ]}
            stepDuration={0.4}
          />
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-400">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
