import React from "react";
import OrbitHero from "./OrbitHero";
import Image from "next/image";

function About() {
  return (
    <section id="About" className="relative min-h-screen overflow-hidden bg-[#12001e]  px-6 pt-40 pb-20 flex flex-col items-center justify-center">

      {/* Right Grid Background */}
      <img  src="/net.png"className="absolute right-0 top-0 h-[45%] w-[45%] opacity-20">
      </img>

      {/* Heading */}
      <h2 className="text-6xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent  z-10">
        About
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-center text-white/70 leading-relaxed text-sm md:text-base z-10">
       I’m an undergraduate engineering student with SAP ABAP developer certification,
       having a strong interest in building real-world, user-focused applications.
      I enjoy working at the intersection of logic, design, and problem solving, whether it’s developing SAP solutions or creating responsive web interfaces.
Through hands-on projects like Placement Quest, Weather Chat Assistant 
and Expense Tracker, I’ve gained practical experience in 
React, Next.js, APIs, and data-driven development.
 I love learning by building and continuously improving my skills by 
 experimenting with new technologies and turning ideas into meaningful products.

      </p>

      {/* Tech Stack Icons */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 z-10">

        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="h-14 w-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:scale-110 transition"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-7 w-7"
            />
          </div>
        ))}

      </div>
      <Image src="/moreLine.png" width={350} height={400} className="opacity-35" alt="line"/>

     {/* <OrbitHero /> */}

    </section>
  );
}

export default About;

const techStack = [
  {
  name: "SAP ABAP",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
},

   // Frontend
  {
    name: "ReactJS",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
  name: "Next.js",
  icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
},


  {
    name: "HTML5",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
  },
  {
    name: "CSS3",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },

  
  // Languages
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "Python",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  

 
  // Backend
  {
    name: "NodeJS",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  

  // Cloud
  
  {
    name: "Google Cloud",
    icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
  },

  // Tools & DevOps
  {
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  // deployment
  {
  name: "Vercel",
  icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
},
{
  name: "Streamlit",
  icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
},


  
];
