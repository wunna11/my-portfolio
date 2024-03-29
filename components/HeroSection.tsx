"use client"; // this is a client component
import React, { useRef } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import TextAnimation from "./aninmation/TextAnimation";

const ArrowComponent = () => {
  return <HiArrowDown size={35} className="animate-bounce" />;
};


const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt=""
            width={300}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <TextAnimation>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Wunna!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Yangon at{" "}
            <span className="font-semibold text-teal-600">
              MetaTeam Myanmar Co.LTD{" "}
            </span>{" "}
            at 2022-2024. Working towards creating software that makes life
            easier and more meaningful.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1gOd4LP9gEH6J7QcBTFeZLYGfcgwDK6dy"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          </TextAnimation>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          href="/about"
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <ArrowComponent />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
