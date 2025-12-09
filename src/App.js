// src/App.js
import React from "react";
import "./App.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function App() {
  const [open, setOpen] = React.useState(false);
  const [slides, setSlides] = React.useState([]);

  const projects = [
    {
      title: "Starcool Starcool Call Center",
      description: "Complaint logging and technician assignment system for managing electrical service requests.",
      tech: "Laravel · Html · Css · JavaScript",
      link: "#",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/starcool4.png` },
        { src: `${process.env.PUBLIC_URL}/images/starcool2.png` },
        { src: `${process.env.PUBLIC_URL}/images/starcool3.png` },
        { src: `${process.env.PUBLIC_URL}/images/starcool1.png` }
      ]
    },
    {
      title: "Sand Pos",
      description: "Online sand booking system where customers generate a token and collect sand onsite.",
      tech: "Laravel · Html · Css · JavaScript",
      link: "#",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/sand1.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand2.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand3.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand4.png` },
        { src: `${process.env.PUBLIC_URL}/images/sand5.png` }
      ]
    },
    {
      title: "Resturant KOT",
      description: "Kitchen Order Tracking System for efficient order management.",
      tech: "Laravel · Html · Css · JavaScript",
      link: "#",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/kot1.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot2.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot3.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot4.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot5.png` },
        { src: `${process.env.PUBLIC_URL}/images/kot6.png` }



      ]
    },
    {
      title: "Eazy Gym",
      description: "Gym membership management system.",
      tech: "Laravel · Angular",
      link: "#",
      images: [
        { src: `${process.env.PUBLIC_URL}/images/gym1.jpeg` },
        { src: `${process.env.PUBLIC_URL}/images/gym2.jpeg` },
        { src: `${process.env.PUBLIC_URL}/images/gym3.jpeg` },
        { src: `${process.env.PUBLIC_URL}/images/gym4.jpeg` }
      ]
    }
  ];

  return (
    <div className="container">

      <header className="header">
        <h1>Jithesh Kappil.</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Full-Stack Developer</h2>
          <p>Laravel • PHP • React • MySQL • Flutter • Python • API Integration</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">

              {/* Thumbnail */}
              <div
                className="thumb"
                onClick={() => {
                  setSlides(p.images);
                  setOpen(true);
                }}
              >
                <img src={p.images[0].src} alt={p.title} />
              </div>

              <h4>{p.title}</h4>
              <p>{p.description}</p>

              <div className="project-footer">
                <span className="tech">{p.tech}</span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* About */}
     <section id="about" className="about">
 <h3>About Me</h3>
<p>
  I am a Full-Stack Developer with 1.5 years of experience at Glinjos Innovations, 
  where I contributed to developing and maintaining both web and mobile applications 
  using Laravel, PHP, React, Flutter, and MySQL. I have hands-on experience in building 
  scalable REST APIs, optimizing backend performance, and creating responsive, user-friendly 
  front-end interfaces.
</p>
<p>
  My technical skills include PHP, Laravel, Python, React, JavaScript, jQuery, MySQL, 
  HTML5, CSS3, Bootstrap, Git/GitHub, and API integrations. I am passionate about 
  writing clean, maintainable code and continuously improving my development skills.
</p>

</section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h3>Contact</h3>
        <p>For inquiries or collaborations, reach out at
          <a href="mailto:jitheshkappil3@gmail.com"> jitheshkappil3@gmail.com</a>
        </p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jithesh-kappil/">Click Here</a></p>
        <p>
          Phone:
          <a href="https://wa.me/971544320768" target="_blank" rel="noopener noreferrer">
            +971 544320768
          </a>
        </p>      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Jithesh Kappil.
      </footer>

      {/* Lightbox Popup */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />
      )}

    </div>
  );
}

export default App;
