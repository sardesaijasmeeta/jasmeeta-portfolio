"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function RecentWork() {
  const [placementIndex, setPlacementIndex] = useState(0);

const placementImages = [
  "/placement/1.png",
  "/placement/2.png",
  "/placement/3.png",
   "/placement/4.png",
    "/placement/5.png",
     "/placement/6.png",
      "/placement/7.png",
       "/placement/8.png"
];
 const [expenseIndex, setExpenseIndex] = useState(0);
  const expenseImages = [
    "/expense/1.png",
    "/expense/2.png",
    "/expense/3.png",
    "/expense/4.png",
    "/expense/5.png"
  ];
  const [weatherIndex, setWeatherIndex] = useState(0);

const weatherImages = [
  "/weather/1.png",
  "/weather/2.png",
  "/weather/3.png",
  "/weather/4.png"
];


  useEffect(() => {
    const interval = setInterval(() => {
      setPlacementIndex((prev) => (prev + 1) % placementImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpenseIndex((prev) => (prev + 1) % expenseImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setWeatherIndex((prev) => (prev + 1) % weatherImages.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <section id="Work" className="relative min-h-screen bg-[#12001e] px-6 py-20 overflow-hidden flex flex-col">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-700 to-cyan-400 opacity-30 blur-[150px]" />

      {/* Heading */}
      <div className="text-center mb-20 ">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          MY <span className="text-purple-400">PROJECTS</span>
        </h2>

        <p className="mt-4 text-white/60 text-sm">
          A collection of projects I’ve worked on.
        </p>
      </div>

      {/* Featured Project Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-300 text-sm tracking-wide">
            Featured Project
          </p>

          <h3
  onClick={() => window.open("http://jas-placement-quest.vercel.app/", "_blank")}
  className="text-4xl font-bold text-white mt-2 cursor-pointer hover:text-cyan-300"
>
  Placement Quest
</h3>


          {/* Glass Description Box */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/70 leading-relaxed shadow-xl">
A placement preparation platform designed to help students 
practice technical interview questions in an interactive and structured way. Built the complete frontend using React with a
 focus on clean UI, smooth navigation, and user-friendly flows. T
 he current version integrates the Gemini API to dynamically generate questions, 
 and I am actively working on developing a structured in-house question bank to reduce 
 dependency on external APIs and improve consistency.
         <br /><br />
GitHub Repo: 
<a 
  href="https://github.com/sardesaijasmeeta/placement-quest.git" 
  target="_blank" 
  className="text-cyan-300 hover:underline"
>
  View Code
</a>
          </div>

       
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div
  onClick={() => window.open("http://jas-placement-quest.vercel.app/", "_blank")}
  className="cursor-pointer"
>
 <img
  src={placementImages[placementIndex]}
  alt="Project Preview"
  className="w-full h-70 object-cover"
 />

</div>


          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="max-w-6xl my-30 mx-auto lg:grid hidden grid-cols-1 md:grid-cols-2 gap-14 items-center">
         {/* Left SIDE IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
           <img
  src={expenseImages[expenseIndex]}
  alt="Project Preview"
  className="w-full h-70 object-cover"
/>

          </div>
        </div>
        {/* Right SIDE */}
        <div>
          <p className="text-cyan-300 text-sm tracking-wide text-right">
            Featured Project
          </p>

       <h3
  onClick={() => window.open("https://jasmeeta-expense-tracker.streamlit.app/", "_blank")}
  className="text-4xl font-bold text-white mt-2 cursor-pointer hover:text-cyan-300"
>
            Expense Tracker
          </h3>

          {/* Glass Description Box */}
          <div className="mt-6 rounded-2xl border text-right border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/70 leading-relaxed shadow-xl">
A personal finance tracking application built using Python and Streamlit 
to help users monitor expenses and understand spending patterns. 
Implemented features for adding, categorizing, and visualizing expenses through
interactive charts and summaries. Focused on simplicity, usability, and real-time data insights.
          <br /><br />
GitHub Repo: 
<a 
  href="https://github.com/sardesaijasmeeta/expense-tracker.git" 
  target="_blank" 
  className="text-cyan-300 hover:underline"
>
  View Code
</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:hidden my-10 grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-300 text-sm tracking-wide">
            Featured Project
          </p>

          <h3
  onClick={() => window.open("https://weather-agent-chat-six.vercel.app/", "_blank")}
  className="text-4xl font-bold text-white mt-2 cursor-pointer hover:text-cyan-300"
>
Expense Tracker          </h3>

          {/* Glass Description Box */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/70 leading-relaxed shadow-xl">
A personal finance tracking application built using Python and Streamlit to help users monitor expenses and understand spending patterns. Implemented features for adding, categorizing, and visualizing expenses through interactive charts and summaries. Focused on simplicity, usability, and real-time data insights.
        
        <br /><br />
GitHub Repo: 
<a 
  href="https://github.com/sardesaijasmeeta/expense-tracker.git" 
  target="_blank" 
  className="text-cyan-300 hover:underline"
>
  View Code
</a>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
  src={expenseImages[expenseIndex]}
  alt="Project Preview"
  className="w-full h-70 object-cover"
/>
          </div>
        </div>
      </div>

        {/* Featured Project Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-300 text-sm tracking-wide">
            Featured Project
          </p>

              <h3
  onClick={() => window.open("https://weather-agent-chat-six.vercel.app/", "_blank")}
  className="text-4xl font-bold text-white mt-2 cursor-pointer hover:text-cyan-300">
            Weather Agent
          </h3>

          {/* Glass Description Box */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/70 leading-relaxed shadow-xl">
A chat-based weather assistant developed as part of a company assignment. Designed and implemented the complete frontend interface and integrated external weather APIs to deliver real-time responses in a conversational format. Focused on clean UI, smooth user interaction, and practical problem-solving.
<br /><br />
GitHub Repo: 
<a 
  href="https://github.com/sardesaijasmeeta/weather-agent-chat.git" 
  target="_blank" 
  className="text-cyan-300 hover:underline"
>
  View Code
</a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
           <img
  src={weatherImages[weatherIndex]}
  alt="Project Preview"
  className="w-full h-70 object-cover"
/>

          </div>
        </div>
      </div>
    </section>
  );
}
