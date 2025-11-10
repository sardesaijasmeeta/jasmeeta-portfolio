import "./index.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";





function App() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 1rem",
  backgroundColor: "white",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};



useEffect(() => {
  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollWidth(progress);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div>
      <div style={{
  position: "fixed",
  top: 0,
  left: 0,
  height: "4px",
  background: "linear-gradient(90deg, #d81b60, #ec407a, #f06292)",
  width: `${scrollWidth}%`,
  transition: "width 0.2s ease",
  zIndex: 9999
}} />

      {/* 🌸 Navbar */}
      <nav style={navStyle}>
  {/* Desktop menu */}
  <div className="nav-links desktop-menu">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#certifications">Certifications</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#training">Training</a>
    <a href="#education">Education</a>
    <a href="#extra">Extra</a>
    <a href="#gallery">Highlights</a>
    <a href="#contact">Contact</a>
  </div>

  {/* Hamburger menu on mobile */}
  {/* Mobile menu icon */}
<div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
  <span className="menu-bar"></span>
  <span className="menu-bar"></span>
  <span className="menu-bar"></span>
</div>

{/* Slide-in mobile menu */}
{menuOpen && (
  <div className="mobile-menu">
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#training" onClick={() => setMenuOpen(false)}>Training</a>
    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
    <a href="#extra" onClick={() => setMenuOpen(false)}>Extra</a>
    <a href="#gallery" onClick={() => setMenuOpen(false)}>Highlights</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
)}

</nav>




      {/* 🌈 Hero Section */}
      <section style={heroSection}>
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{ fontSize: "3rem", fontWeight: "700", color: "#333" }}
  >
    Hi, I’m <span style={{ color: "#d81b60" }}>Jasmeeta Sardesai</span> 👋
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 1 }}
    style={{
      fontSize: "1.3rem",
      fontWeight: "500",
      color: "#444",
      marginTop: "0.5rem",
    }}
  >
    I turn ideas into meaningful digital experiences 🌸
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 1 }}
    style={heroText}
  >
    Certified SAP ABAP Developer | Frontend Developer | Problem Solver | Innovator
  </motion.p>
</section>


      {/* 📜 About Section */}
      <Section id="about" title="About Me" align="centered">
        <p className="aligned-text">
          Motivated and adaptable B.Tech student with a strong foundation in programming and ERP technologies. Certified SAP ABAP Associate Developer (S/4HANA) with hands-on experience in ABAP development, web technologies, and data handling. Adept at solving problems, optimizing processes, and developing data-driven solutions. Open to roles in SAP ABAP, Data Engineering, Software Development, Analytics, and ERP Engineering, where I can leverage my technical skills and analytical mindset to drive business impact.
        </p>
      </Section>

      {/* 💻 Skills */}
      <Section id="skills" title="Skills">
        <ul className="skills-list">
          <li><b>SAP ABAP:</b> ALV Reports, Function Modules, Modularization, SQL Joins, Internal Tables, CDS Views, OData, Adobe Forms, Debugging, Performance Optimization</li>
          <li><b>Programming:</b> Python, C, C++, Java</li>
          <li><b>Web Development:</b> React.js, HTML, CSS, JavaScript</li>
          <li><b>Data Tools:</b> Pandas, NumPy, Excel, SQL</li>
          <li><b>Version Control:</b> Git, GitHub</li>
          <li><b>Soft Skills:</b> Problem-Solving, Collaboration, Adaptability, Analytical Thinking</li>
        </ul>
      </Section>

      {/* 🎓 Certifications */}
      <Section id="certifications" title="Certifications">
        SAP Certified Associate Developer – ABAP with SAP S/4HANA (C_ABAPD_2309), 2025
      </Section>

      {/* 💼 Experience */}
      <Section id="experience" title="Experience" align="centered">
        <div className="aligned-text">
          <h3>SAP ABAP Intern – Feligrat IT Solutions Pvt. Ltd. (Jul 2025 – Oct 2025)</h3>
          <p>Developed and tested ABAP programs including ALV Reports, CDS Views, and OData Services. Implemented performance tuning techniques using efficient SELECT queries and modularization.</p>

          <h3>Frontend Developer Intern – Violet Designs (Dec 2023 – Jan 2024)</h3>
          <p>Designed responsive UI components using React.js, HTML, CSS, and JavaScript. Collaborated in an Agile environment to improve UX.</p>
        </div>
      </Section>

      {/* 🧠 Training */}
     <Section id="training" title="Training" align="centered">
  <div className="aligned-text">
    <p><strong>SAP ABAP Training – Feligrat Institute (May 2025 – Jul 2025)</strong></p>
    <p>
      Hands-on training focused on Internal Tables, Modularization, ALV Reports, CDS Views, OData,
      Adobe Forms, Debugging, and Performance Optimization.
    </p>
  </div>
</Section>


      {/* 🧩 Projects */}
      <Section id="projects" title="Projects">
        <ul>
          <li><b>Sales Order Report (ABAP):</b> Improved data visibility using optimized SQL joins.</li>
          <li><b>Billing Address Retrieval:</b> Automated data extraction from VBRK using ADRNR.</li>
          <li><b>Expense Tracker (Python):</b> Built a CSV-based finance tracker using Pandas.</li>
          <li><b>Smart Trolley System (IoT):</b> IoT-enabled shopping system with sensors & RFID.</li>
        </ul>
      </Section>

      {/* 🎓 Education */}
      <Section id="education" title="Education">
        <ul>
          <li><b>B.Tech (2022 – 2026)</b> – St. Francis Institute of Technology</li>
          <li><b>Senior Secondary (2020 – 2022)</b> – Rustomjee Junior College</li>
          <li><b>Secondary Education (2020)</b> – Mary Immaculate Girl’s High School</li>
        </ul>
      </Section>

      {/* 🌟 Extra Curricular */}
      <Section id="extra" title="Extra-Curricular">
        <ul>
          <li>Licensee & Organizer – TEDxSFIT 2025</li>
          <li>Finance Head – IIC SFIT</li>
          <li>Trek Leader – Trekhievers</li>
          <li>Cleared Trinity Level 0 Guitar Exam</li>
        </ul>
      </Section>

      {/* 📸 Gallery */}
      {/* 🌟 Featured Highlights */}
{/* 🌟 Featured Highlights */}
<Section id="gallery" title="Featured Highlights">
  <div className="highlights-container">

    {/* 1️⃣ Certificate */}
    <motion.div className="highlight-card" whileHover={{ scale: 1.02 }}>
      <a href="/certificate.jpg" target="_blank">
        <img src="/certificate.jpg" alt="SAP Certificate" />
      </a>
      <div className="highlight-info">
        <h3>SAP Certification</h3>
        <p>SAP Certified Associate – ABAP Cloud (Back-End Developer), 2025</p>
      </div>
    </motion.div>

    {/* 2️⃣ Internship Offer Letter */}
    <motion.div className="highlight-card" whileHover={{ scale: 1.02 }}>
      <a href="/offer_letter.jpg" target="_blank">
        <img src="/offer_letter.jpg" alt="Internship Offer Letter" />
      </a>
      <div className="highlight-info">
        <h3>Internship Offer Letter (Front-End Developer)</h3>
        <p>➤ Front-End Developer Intern at Violet Designs — built responsive web interfaces using React.js & Tailwind CSS.</p>
      </div>
    </motion.div>

    {/* 3️⃣ TEDx */}
    <motion.div className="highlight-card" whileHover={{ scale: 1.02 }}>
      <a href="/tedx.jpg" target="_blank">
        <img src="/tedx.jpg" alt="TEDxSFIT 2025" />
      </a>
      <div className="highlight-info">
        <h3>TEDxSFIT 2025</h3>
        <p>Licensee & Organizer, TEDxSFIT 2025 — led a passionate team of 40 to curate ideas worth spreading.</p>
      </div>
    </motion.div>

    {/* 4️⃣ Trek */}
    <motion.div className="highlight-card" whileHover={{ scale: 1.02 }}>
      <a href="/trek.jpg" target="_blank">
        <img src="/trek.jpg" alt="Trek Leader" />
      </a>
      <div className="highlight-info">
        <h3>Adventure Enthusiast</h3>
        <p>Led multiple treks across Maharashtra’s scenic trails — inspiring confidence, teamwork, and love for the outdoors.</p>
      </div>
    </motion.div>

    {/* 5️⃣ Music */}
    <motion.div className="highlight-card" whileHover={{ scale: 1.02 }}>
      <a href="/trinity.jpg" target="_blank">
        <img src="/trinity.jpg" alt="Guitar Certification" />
      </a>
      <div className="highlight-info">
        <h3>Music & Guitar</h3>
        <p>Guitarist at heart — completed Grade 1 Acoustic Guitar Exam, London College of Music.</p>
      </div>
    </motion.div>

  </div>
</Section>



      {/* 📄 Download Resume */}
      <div className="resume-bottom">
        <a href="/JASMEETA_RESUME_2025.pdf" download className="download-btn">
          📄 Download Resume
        </a>

      </div>

      {/* 📞 Contact */}
      <Section id="contact" title="Contact Me">
        <div className="contact-row">
          <p>📧 <a href="mailto:sardesaijasmeeta24@gmail.com">sardesaijasmeeta24@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/jasmeetasardesai" target="_blank">LinkedIn</a></p>
        </div>
      </Section>

      {/* Back to Top Button */}
      <a href="#" className="back-to-top">↑</a>
    </div>
  );
}

/* ✨ Reusable Section */
const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="section"
  >
    <h2>{title}</h2>
    <div className="content">{children}</div>
  </motion.section>
);

/* 🎨 Styles */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 3rem",
  background: "white",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 100,
};

const heroSection = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "linear-gradient(270deg, #e0f7fa, #fce4ec, #f8bbd0, #e1f5fe)",
  backgroundSize: "800% 800%",
  animation: "gradientMove 15s ease infinite",
  color: "#333",
  paddingTop: "6rem",
};


const heroText = {
  maxWidth: "600px",
  color: "#555",
  marginTop: "1rem",
};

export default App;
