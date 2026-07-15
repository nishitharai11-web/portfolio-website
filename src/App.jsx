import "./App.css";
import dashboard from "./assets/dashboard.png";
import application from "./assets/application.png";
import analytics from "./assets/analytics.png";
import hero from "./assets/hero.png";
function App() {
  return (
    <div className="app">

      <nav className="navbar">

  <h2>&lt;/&gt;</h2>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

</nav>
      {/* HERO */}

      <section className="hero">

      <div className="hero-text">
      
<h1>Hi, I'm Nishitha Rai👋</h1>

<h2>Aspiring Full Stack Web Developer</h2>

<p>
I build responsive websites and full stack web applications using
React, Node.js, Express.js and MongoDB.
</p>

<div className="buttons">

<a
href="https://placement-qnsqltmkl-nishitha-rai.vercel.app"
target="_blank"
rel="noopener noreferrer"
>

<button>🚀 Live Demo</button>

</a>

<a
href="https://github.com/nishitharai11-web"
target="_blank"
rel="noopener noreferrer"
>

<button className="outline">💻 Source Code</button>
</a>

<a
  href="mailto:nishitharai11@gmail.com"
  className="button-link"
>
  <button className="outline">📩 Contact Me</button>
</a>

</div>

</div>

<div className="hero-image">
  <img src={hero} alt="Developer Illustration" />
</div>

</section>
      {/* ABOUT */}

<section className="card" id="about">

        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student who enjoys creating
          responsive websites and full stack web applications.
          I love solving real-world problems and continuously improving my
          development skills.
        </p>

      </section>

      {/* SKILLS */}

<section className="card">

<h2>Technical Skills</h2>

<div className="skills">

<span>HTML5</span>
<span>CSS3</span>
<span>JavaScript</span>
<span>React</span>
<span>Node.js</span>
<span>Express.js</span>
<span>MongoDB Atlas</span>
<span>Git</span>
<span>GitHub</span>
<span>Vercel</span>

</div>

</section>

{/* PROJECTS */}

<section className="card" id="projects">

<h2>Featured Project</h2>

<div className="project-card">

<div className="screenshots">

<img src={dashboard} alt="Dashboard" />

<img src={application} alt="Application" />

<img src={analytics} alt="Analytics" />

</div>

<div className="project-content">

<h3>🚀 PlacementPro</h3>

<p>

A Full Stack Placement & Internship Tracker built using React,
Node.js, Express.js and MongoDB Atlas.

It helps students track internship and placement applications with complete CRUD operations, analytics and CSV export.

</p>

<ul>

<li>✅ Add Applications</li>

<li>✅ Edit Applications</li>

<li>✅ Delete Applications</li>

<li>✅ Search Applications</li>

<li>✅ Export CSV</li>

<li>✅ Analytics Dashboard</li>

</ul>

<div className="buttons">

<a
href="https://github.com/nishitharai11-web/PlacementPro"
target="_blank"
rel="noopener noreferrer"
>

<button className="outline">
💻 Frontend
</button>

</a>

<a
href="https://github.com/nishitharai11-web/PlacementPro-Backend"
target="_blank"
rel="noopener noreferrer"
>

<button className="outline">
⚙ Backend
</button>

</a>

</div>

</div>

</div>

</section>

{/* EDUCATION */}

<section className="card">

<h2>Education</h2>

<h3>B.E. Computer Science Engineering</h3>

<p>
Velammal College of Engineering and Technology
</p>

<p>
Expected Graduation: 2028
</p>

</section>

{/* CONTACT */}

<section className="card" id="contact">

  <h2>Let's Work Together 🚀</h2>

  <p>
    I'm currently available for freelance web development projects,
    internships and exciting opportunities.
  </p>

  <div className="buttons">

    <a href="mailto:nishitharai11@gmail.com">
      <button>📧 Email Me</button>
    </a>

    <a
      href="https://www.linkedin.com/in/nishitharai11"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="outline">💼 LinkedIn</button>
    </a>

  </div>

</section>

<footer className="footer">

  <p>Designed & Developed by Nishitha Rai ❤️</p>

  <p>© 2026 All Rights Reserved.</p>

</footer>

    </div>
  );
}

export default App;