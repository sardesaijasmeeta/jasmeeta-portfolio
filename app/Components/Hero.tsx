"use client";
import Navbar from "./Navbar";
import GlassCard from "./GlassCard";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <>
      <section className="lg:block hidden relative h-fit overflow-hidden bg-gradient-to-br from-[#12001e] via-[#8a00c2] to-cyan-400 px-10 py-5 ">
        <GlassCard>
          <Navbar />

          <div className="flex relative flex-row justify-between items-center gap-10 px-10 py-10  mt-0">

            {/* LEFT CONTENT */}
            <div className="pl-16 max-w-[900px]">
              <h1 className="text-[90px] font-bold text-white">
                Hi, I’m <span className="text-white">Jasmeeta</span>
              </h1>

<p className="mt-3 text-[40px] font-semibold text-white">
                SAP ABAP Developer | Frontend Developer
              </p>

              <p className="mt-6 max-w-3xl text-[18px] text-white/70">
An SAP ABAP certified developer and frontend developer passionate about building practical,
 real-world applications. I enjoy turning ideas into functional digital products 
 using SAP technologies and modern web development.              </p>

              
                 <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Jasmeeta_Sardesai-Resume.pdf";
                link.download = "Jasmeeta_Sardesai-Resume.pdf";
                link.click();
              }}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 text-sm font-medium text-white shadow-lg hover:scale-105 transition mt-8">
              Download Resume
            </button>
              
            </div>

            {/* RIGHT IMAGE */}
<div className="relative w-[620px] h-[560px] flex items-end justify-center -ml-20 mt-32">
  <Image
  src="/pfp.png"
  alt="Profile"
  width={480}
  height={520}
  className="rounded-xl object-contain"
  priority
/>

</div>




          </div>
        </GlassCard>
      </section>
      <section
      className="
        lg:hidden 
        relative 
        h-fit 
        overflow-hidden 
        bg-gradient-to-br 
        from-[#12001e] 
        via-[#8a00c2] 
        to-cyan-400 
        px-4 
        sm:px-6 
        py-6
      "
    >
      <GlassCard>
        <Navbar />

        <div className="flex flex-col-reverse justify-between items-center  px-2 sm:px-6 py-10">

          {/* LEFT CONTENT */}
          <div className="text-center">

            <h1 className="text-[45px] sm:text-[60px] font-bold text-white">
              Hi, I’m <span className="text-white">Jasmeeta</span>
            </h1>

            <p className="mt-3 text-[26px] sm:text-[34px] font-semibold bg-gradient-to-r from-cyan-400 to-[#8a00C2] bg-clip-text text-transparent">
              SAP ABAP Developer | Frontend Developer.
            </p>

            <p className="mt-6 max-w-xl text-[15px] sm:text-[16px] text-white/70 leading-relaxed mx-auto">
              An SAP ABAP developer and frontend developer passionate about building practical, user-focused applications. I enjoy working on real-world problems through SAP development, web technologies, and product-based projects. I love creating meaningful digital experiences that combine logic, design, and performance.

            </p>

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Jasmeeta_Sardesai-Resume.pdf";
                link.download = "Jasmeeta_Sardesai-Resume.pdf";
                link.click();
              }}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 text-sm font-medium text-white shadow-lg hover:scale-105 transition mt-8">
              Download Resume
            </button>
          </div>

          {/* RIGHT LOTTIE ANIMATION */}
          <div className="w-full flex justify-center">
            <DotLottieReact
              src="/Robot-says-hello.lottie"
              loop
              autoplay
              className="w-[420px] sm:w-[380px] h-auto"
            />
          </div>

        </div>
      </GlassCard>
    </section>
    </>
  );  
}
