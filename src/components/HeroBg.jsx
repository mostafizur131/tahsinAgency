"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Hero from "./Hero";
import Brands from "./Brands";

const HeroBg = () => {
  const current = usePathname();
  return (
    <section
      className={
        current === "/"
          ? "relative pt-12 lg:pt-20 pb-20 z-10 bg-primaryLight"
          : "relative pt-12 lg:pt-20 pb-20 z-10 bg-white"
      }
    >
      <Hero />
      <Brands />
    </section>
  );
};

export default HeroBg;
