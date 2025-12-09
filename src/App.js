// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [displayText, setDisplayText] = useState("");

  const fullText = "Full-Stack Developer";
  let index = 0;

  // Typing animation for hero text
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Starcool Starcool Call Center",
      description: "Complaint logging and technician assignment system for managing electrical service requests.",
      tech: "Laravel · Html · Css · JavaScript",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/starcool4.png` },
        { src: `${process.env.PUBLIC_URL}/images/starcool2.png` },
        { src: `${process.env.PUBLIC_URL}/images/starcool3.png` },
        { src: `${process.env.PUBLIC_URL}/images/starcool1.png` },
      ],
    },
    {
      title: "Sand Pos",
      description: "Online sand booking system where customers generate a token and collect sand onsite.",
      tech: "Laravel · Html · Css · JavaScript",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/sand1.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand2.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand3.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand4.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand5.png` },
      ],
    },
    {
      title: "Resturant KOT",
      description: "Kitchen Order Tracking System for efficient order management.",
      tech: "Laravel · Html · Css · JavaScript",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/kot1.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot2.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot3.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot4.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot5.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot6.png` },
      ],
    },
    {
      title: "Eazy Gym",
      description: "Gym membership management system.",
      tech: "Laravel · Angular",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/gym1.jpeg` },
        { src: `${process.env.PUBLIC_URL}/images/gym2.jpeg` },
        { src: `${process.env.PUBLIC_URL}/images/gym3.jpeg` },
        { src: `${process.env.PUBLIC_URL}/images/gym4.jpeg` },
      ],
    },
  ];

  const skills = [
    { name: "React", percent: 90 },
    { name: "Laravel", percent: 85 },
    { name: "PHP", percent: 90 },
    { name: "MySQL", percent: 80 },
    { name: "Flutter", percent: 70 },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Header */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Jithesh Kappil.</h1>
        <nav>
          {["Projects", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              whileHover={{ scale: 1.2, color: "#4CAF50" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </motion.header>

      {/* Hero */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-text"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>{displayText}</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Laravel • PHP • React • MySQL • Flutter • Python • API Integration
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <motion.div
                className="thumb"
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  setSlides(p.images);
                  setOpen(true);
                }}
              >
                <img src={p.images[0].src} alt={p.title} />
              </motion.div>

              <motion.h4
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {p.title}
              </motion.h4>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {p.description}
              </motion.p>

              <div className="project-footer">
                <span className="tech">{p.tech}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>About Me</h3>
        {[
          "I am a Full-Stack Developer with 1.5 years of experience at Glinjos Innovations, where I contributed to developing and maintaining both web and mobile applications using Laravel, PHP, React, Flutter, and MySQL.",
          "My technical skills include PHP, Laravel, Python, React, JavaScript, jQuery, MySQL, HTML5, CSS3, Bootstrap, Git/GitHub, and API integrations. I am passionate about writing clean, maintainable code and continuously improving my development skills.",
        ].map((p, idx) => (
          <motion.p
            key={idx}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            {p}
          </motion.p>
        ))}

        {/* Skills bars */}
       
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>Contact</h3>
        <p>
          For inquiries or collaborations, reach out at
          <a href="mailto:jitheshkappil3@gmail.com"> jitheshkappil3@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/jithesh-kappil/">Click Here</a>
        </p>
        <p>
          Phone:
          <a href="https://wa.me/971544320768" target="_blank" rel="noopener noreferrer">
            +971 544320768
          </a>
        </p>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} Jithesh Kappil.
      </motion.footer>

      {/* Lightbox */}
      {open && <Lightbox open={open} close={() => setOpen(false)} slides={slides} />}
    </div>
  );
}

export default App;
