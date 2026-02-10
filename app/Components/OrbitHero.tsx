"use client";

import Image from "next/image";
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export default function OrbitHero() {
  const icons = [
    { icon: <FaReact size={22} />, angle: 20 },
    { icon: <SiNextdotjs size={20} />, angle: 70 },
    { icon: <FaNodeJs size={22} />, angle: 140 },
    { icon: <SiTypescript size={20} />, angle: 220 },
    { icon: <FaGithub size={20} />, angle: 250 },
    { icon: <FaHtml5 size={22} />, angle: 310 },
    { icon: <FaCss3Alt size={22} />, angle: 350 },
  ];
   const MobileIcons = [
    { icon: <FaReact size={22} />, angle: 180  },
    { icon: <SiNextdotjs size={20} />, angle: 70 },
    { icon: <FaNodeJs size={22} />, angle: 280 },
    { icon: <SiTypescript size={20} />, angle: 120 },
    { icon: <FaGithub size={20} />, angle: 250 },
    { icon: <FaHtml5 size={22} />, angle: 100 },
    { icon: <FaCss3Alt size={22} />, angle: 250 },
  ];
  return (
    <>
      <section className="relative flex lg:hidden  items-center justify-center overflow-hidden bg-[#12001e]">
        {/* <Image src="/line.png" width={350} height={400} className="absolute top-0" alt="line"/> */}
        {/* Glow Background */}
        <div className="absolute h-[400px] w-[300px] rounded-full bg-gradient-to-r from-[#12001e] to-[#12001e] opacity-30 blur-[130px]" />

        {/* Orbit Container */}
        <div className="relative h-[250px] w-[450px] flex items-center justify-center">

          {/* Orbit Ellipses */}
          <svg
            className="absolute w-full opacity-30"
            viewBox="0 0 800 400"
            fill="none"
          >
            {/* <ellipse */}
              {/* cx="80" */}
              {/* cy="90" */}
              {/* rx="40" */}
              {/* ry="20" */}
              {/* stroke="white" */}
              {/* strokeWidth="1" */}
            {/* /> */}
            <ellipse
              cx="400"
              cy="200"
              rx="250"
              ry="80"
              stroke="white"
              strokeWidth="1"
            />
            <ellipse
              cx="400"
              cy="230"
              rx="350"
              ry="170"
              stroke="white"
              strokeWidth="1"
            />
          </svg>

          {/* Static Icons */}
          {MobileIcons.map((item, i) => {
            const angle = (item.angle * Math.PI) / 180;

            // Ellipse radius
            const radiusX = 210;
            const radiusY = 70;

            // Position formula
            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md shadow-lg hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>
            );
          })}

          {/* Center Sphere */}
          <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 shadow-2xl">
            <span className="text-3xl font-bold text-white">Σ</span>
          </div>
        </div>
      </section>
      <section className="relative lg:flex hidden items-center justify-center overflow-hidden bg-[#12001e]">
        {/* <Image src="/line.png" width={350} height={400} className="absolute top-0" alt="line"/> */}
        {/* Glow Background */}
        <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#12001e] to-[#12001e] opacity-30 blur-[130px]" />

        {/* Orbit Container */}
        <div className="relative h-[250px] w-[750px] flex items-center justify-center">

          {/* Orbit Ellipses */}
          <svg
            className="absolute w-full opacity-30"
            viewBox="0 0 800 400"
            fill="none"
          >
            <ellipse
              cx="400"
              cy="200"
              rx="320"
              ry="90"
              stroke="white"
              strokeWidth="1"
            />
            <ellipse
              cx="400"
              cy="200"
              rx="250"
              ry="70"
              stroke="white"
              strokeWidth="1"
            />
            <ellipse
              cx="400"
              cy="200"
              rx="370"
              ry="120"
              stroke="white"
              strokeWidth="1"
            />
          </svg>

          {/* Static Icons */}
          {icons.map((item, i) => {
            const angle = (item.angle * Math.PI) / 180;

            // Ellipse radius
            const radiusX = 310;
            const radiusY = 90;

            // Position formula
            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md shadow-lg hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>
            );
          })}

          {/* Center Sphere */}
          <div className="relative z-10 flex h-28 w-30 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 shadow-2xl">
            <span className="text-5xl font-bold text-white">Σ</span>
          </div>
        </div>
      </section>
    </>
  );
}
