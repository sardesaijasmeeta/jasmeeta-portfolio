"use client";

import { useRef } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((err: string) => {
        console.log("Email error:", err);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="Contact" className="relative min-h-screen bg-[#12001e] px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-125 w-125 rounded-full bg-linear-to-r from-[#DC00D3] to-[#0CFFFF] opacity-25 blur-[180px]" />

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-7xl font-bold bg-linear-to-r from-[#0CFFFF] to-[#DC00D3] bg-clip-text text-transparent">
          Contact
        </h2>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-4xl font-semibold text-cyan-300 mb-4">
            Drop me a message
          </h3>

          <p className="text-white/60 text-sm leading-relaxed max-w-md mb-10">
            Feel free to reach out for collaborations or freelance projects. I’m always open to discussing new ideas and
            opportunities.
          </p>

          {/* Contact Info */}
          <div className="space-y-6 text-white/70 text-sm">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-white/5 border border-white/10">
                <FaPhoneAlt className="text-cyan-300" />
              </span>
              <p>+91 7718958607</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-white/5 border border-white/10">
                <FaEnvelope className="text-purple-300" />
              </span>
              <p>sardesaijasmeeta24@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-white/5 border border-white/10">
                <FaMapMarkerAlt className="text-cyan-300" />
              </span>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 w-full">
          <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
            {/* Name */}
            <div>
              <label className="block text-white/70 text-sm mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="yourmail@gmail.com"
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white/70 text-sm mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can I help?"
                name="message"
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="rounded-full bg-linear-to-r from-cyan-400 to-purple-500 px-8 py-3 text-sm font-medium text-white shadow-lg hover:scale-105 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
        <p>© 2026 Jasmeeta Sardesai. All rights reserved.</p>

        {/* Social Icons */}
       <div className="flex gap-5 text-lg text-white/60">
  <FaGithub
    onClick={() => window.open("https://github.com/sardesaijasmeeta", "_blank")}
    className="hover:text-white cursor-pointer transition"
  />
  <FaLinkedin
    onClick={() => window.open("https://www.linkedin.com/in/jasmeetasardesai/", "_blank")}
    className="hover:text-white cursor-pointer transition"
  />
</div>

      </div>
    </section>
  );
}
