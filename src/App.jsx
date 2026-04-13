import { useState } from "react";
import "../src/Css/app.css";
import img2 from "./assets/Ma-1-logo.jpeg";
import blueTick from "./assets/Blue-tick-Png.jpeg";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedin.png";
import x from "./assets/x.png";
import location from "./assets/location.png";
import skill from "./assets/skill.png";
import project from "./assets/project.png";
import contact from "./assets/contact.png";
import internship from "./assets/internship.png";
import certificate from "./assets/Adil-Codec-Certificate.png";
import instagram from "./assets/instagram.png";
import copyright from "./assets/copyright.png";
import resume from "./Pdf/Mohammad_Adil_Resume.pdf";

function App() {
  const [follow, setFollow] = useState("Follow");
  const [showContent, setshowContent] = useState("skill");
  const dates = new Date().getFullYear();

  const handleFollowclick = () => {
    if (follow == "Follow") {
      setFollow("Following");
    } else {
      setFollow("Follow");
    }
  };

  const handleShowContentClick = (showContent) => {
    setshowContent(showContent);
  };

  return (
    <>
      <div className="container">
        <div className="title-img"></div>
        <div className="profile-img">
          <img src={img2} className="img" />
        </div>
        <div className="profile-container">
          <div className="content">
            <h1 className="userName">
              Mohammad Adil Shaikh
              <span className="bluetick-img">
                <img src={blueTick} className="bluetick" />
              </span>
            </h1>
            <button className="Follow-Btn" onClick={handleFollowclick}>
              {follow}
            </button>
          </div>
          <i className="email">
            mohammadadil2486@gmail.com <i>+91 9833261164</i>
          </i>

          <hr />
          <h1 className="aboutUs">About</h1>
          <p className="About-description">
            Recent Information Technology graduate from GN Khalsa College with a
            proven track record in Full Stack Development and modern DevOps
            practices. Having completed a professional internship as a Web
            Developer, I bring hands-on experience in building secure, scalable,
            and high-performance applications. I specialize in the MERN stack,
            .NET ecosystem, and CI/CD workflows, maintaining a strict focus on
            clean architecture and professional UI/UX design. I am a
            solution-oriented developer committed to writing efficient code and
            leveraging DevOps automation to streamline deployment and optimize
            system reliability.
          </p>
          <div className="social-link-container">
            <div className="social-media">
              <h4>
                <a href="https://github.com/Mohammad-Adil-01">
                  <img src={github} width="35px" className="social-media-img" />
                </a>
              </h4>
              <h4>
                <a href="https://www.linkedin.com/in/mohammad-adil-shaikh-166822301/">
                  <img
                    src={linkedIn}
                    width="35px"
                    className="social-media-img"
                  />
                </a>
              </h4>
              <h4>
                <a href="https://x.com/Adil2486">
                  <img src={x} width="35px" className="social-media-img" />
                </a>
              </h4>
              <h4>
                <a href="https://www.instagram.com/adil__s10">
                  <img
                    src={instagram}
                    width="35px"
                    className="social-media-img"
                  />
                </a>
              </h4>
            </div>
            <div className="location-container">
              <h4
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={location} width="16px" className="social-media-img" />
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontSize: "1.8rem",
                    fontWeight: "400",
                    textDecoration: "underline",
                  }}
                >
                  Mumbai, India
                </span>
              </h4>
            </div>
          </div>
          <hr />
          <div className="skill-project-review-btn">
            <button
              className="line skills"
              onClick={() => handleShowContentClick("skill")}
            >
              Skills
              <hr className="hover-line" />
            </button>
            <button
              className="line project"
              onClick={() => handleShowContentClick("project")}
            >
              Project
              <hr className="hover-line" />
            </button>
            <button
              className="line internship"
              onClick={() => handleShowContentClick("internship")}
            >
              Internships
              <hr className="hover-line" />
            </button>

            <button
              className="line contact"
              onClick={() => handleShowContentClick("background")}
            >
              Academics
              <hr className="hover-line" />
            </button>

            <button className="line resume">
              <a
                className="resume-link"
                href={resume}
                download="Mohammad_Adil_Resume.pdf"
              >
                Resume
                <hr className="hover-line" />
              </a>
            </button>
          </div>
          <hr />
          <div className="showContent">
            {/* Skills section Start From Here */}
            {showContent === "skill" && (
              <div className="showSkill">
                <div className="skillsheading">
                  <h1 className="skill-title">My Skills</h1>
                  <span>
                    <img src={skill} width="35px" />
                  </span>
                </div>
                <div className="web-app-dev-section">
                  <h1 className="web-app-title">Web & App Development</h1>
                  <p className="web-app-dev-description">
                    Html5 , Css [Tailwind , Bootstrap], JavaScript , ASP.NET ,
                    React.js , Node.js , Php , Android Basic , Kotlin
                  </p>
                </div>
                <div className="programming-development-section">
                  <h1 className="programming-title">
                    Programming & Development
                  </h1>
                  <p className="programming-development-description">
                    C++ , Java , ASP.NET , Python , OOPs , DSA
                  </p>
                </div>
                <div className="database-section">
                  <h1 className="database-title">DataBases</h1>
                  <p className="database-description">MySQL , MongoDB</p>
                </div>
                <div className="version-control-section">
                  <h1 className="version-title">Version Controls</h1>
                  <p className="version-control-description">GitHub , Git, Linux</p>
                </div>
                <div className="tools-section">
                  <h1 className="tools-title">Tools</h1>
                  <p className="tools-description">
                    Vs Code , Microsoft Visual Studio Code , TntelliJ IDEA ,
                    PyCharm , Notepad
                  </p>
                </div>
              </div>
            )}

            {/* Project section Start From Here */}
            {showContent === "project" && (
              <div className="showProject">
                <div className="projectheading">
                  <h1 className="project-title">My Project</h1>
                  <span>
                    <img src={project} width="35px" />
                  </span>
                </div>
                <div className="fresh-cart-com">
                  <h1 className="fresh-cart-title">
                    Fresh Cart - (E-Commerce Web Application)
                  </h1>
                  <p className="fresh-cart-description">
                    Developed FreshCart, a secure MERN-stack e-commerce
                    ecosystem featuring a novel Dual-Channel Delivery System
                    designed to reduce RTO costs by allowing seamless switching
                    between home delivery and failed-delivery pickups. The
                    platform integrates an AI-driven Chatbot for automated
                    real-time customer support and order tracking, enhancing the
                    overall user journey. Built with a focus on enterprise-grade
                    security, I implemented JWT-based authentication, Bcrypt
                    password hashing, and protected API routes to ensure robust
                    data integrity. This project demonstrates a deep
                    understanding of full-stack architecture, combining advanced
                    logistics logic with professional UI/UX and secure backend
                    management.
                  </p>
                  <div className="btn">
                    <a
                      className="fresh-cart-link"
                      href="https://github.com/Mohammad-Adil-01/Fresh-Cart.com"
                    >
                      <button className="fresh-cart-btn hover-btn">
                        Go To Repository
                      </button>
                    </a>
                    <a
                      target="_blank"
                      className="fresh-cart-link"
                      href="https://fresh-cart-com.vercel.app/"
                    >
                      <button className="fresh-cart-btn hover-btn">
                        View Live Demo
                      </button>
                    </a>
                  </div>
                </div>
                <div className="TechStack-com">
                  <h1 className="TechStack-title">
                    TechStak - Job-Portal Website
                  </h1>
                  <p className="TechStack-description">
                    TechStak is a job portal website that connects job seekers
                    with potential employers. The platform allows users to
                    create profiles, upload resumes, and search for job listings
                    based on various criteria such as location, industry, and
                    job type. Employers can post job openings, review
                    applications, and manage their recruitment process. Built
                    Using ASP.NET , C# , SQL Server , HTML , CSS , JavaScript.
                  </p>
                  <button className="TechStack-btn hover-btn">
                    <a
                      className="TechStack-link"
                      href="https://github.com/Mohammad-Adil-01/TechStack-Job-Portal"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
                <div className="koral-com">
                  <h1 className="koral-title">
                    Koral.Com - (E-Commerce Web Application)
                  </h1>
                  <p className="koral-description">
                    Designed and developed a responsive landing page for
                    Koral.com, highlighting brand identity with a modern UI,
                    engaging layout, and mobile-friendly design to create a
                    strong first impression.
                  </p>
                  <button className="koral-btn hover-btn">
                    <a
                      className="koral-link"
                      href="https://github.com/Mohammad-Adil-01/Koral.com"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
                <div className="weather-com">
                  <h1 className="weather-title">
                    Weather Application - (Using OpenWeather API)
                  </h1>
                  <p className="weather-description">
                    Developed a dynamic Weather Application that provides
                    real-time weather updates using API integration. The
                    application allows users to search for any city worldwide
                    and instantly displays accurate details such as temperature,
                    humidity, wind speed, and weather conditions. Built Using
                    React.js
                  </p>
                  <button className="weather-btn hover-btn">
                    <a
                      className="weather-link"
                      href="https://github.com/Mohammad-Adil-01/Weather-Application"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
                <div className="crud-com">
                  <h1 className="crud-title">
                    Student Managemnet System - (Using TKinter & MongoDB)
                  </h1>
                  <p className="crud-description">
                    Implemented full CRUD operations Create, Read, Update,
                    Delete for managing student records with a simple GUI
                    interface. Built Using Python TKinter and MongoDB
                  </p>
                  <button className="crud-btn hover-btn">
                    <a
                      className="crud-link"
                      href="https://github.com/Mohammad-Adil-01/CRUD-Operation-BY-Python-MongoDB"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
                <div className="st-joseph-com">
                  <h1 className="st-joseph-title">
                    St.Joseph High School - (Institutional Website)
                  </h1>
                  <p className="st-joseph-description">
                    Designed and developed a responsive website for St. Joseph
                    High School, showcasing school information, activities, and
                    announcements with a clean and user-friendly interface.
                    Built using HTML, CSS, JavaScript.
                  </p>
                  <button className="st-joseph-btn hover-btn">
                    <a
                      className="st-joseph-link"
                      href="https://github.com/Mohammad-Adil-01/StJoseph.com"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
                <div className="Login-com">
                  <h1 className="Login-title">
                    Login Page (Authorization / Authentication)
                  </h1>
                  <p className="Login-description">
                    Created a simple and responsive Login Page using React.js
                    with form validation and modern UI components.
                  </p>
                  <button className="Login-btn hover-btn">
                    <a
                      className="Login-link"
                      href="https://github.com/Mohammad-Adil-01/loginpage"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
                <div className="todo-com">
                  <h1 className="todo-title">To-Do List (For Personal Use)</h1>
                  <p className="todo-description">
                    Developed a To-Do List application using HTML, CSS, and
                    JavaScript to add, delete, and manage daily tasks with a
                    simple and interactive UI.
                  </p>
                  <button className="todo-btn hover-btn">
                    <a
                      className="todo-link"
                      href="https://github.com/Mohammad-Adil-01/To-do-List"
                    >
                      Go To Repository
                    </a>
                  </button>
                </div>
              </div>
            )}

            {/* internship section Start From Here */}
            {showContent === "internship" && (
              <div className="showInternship">
                <div className="internshipheading">
                  <h1 className="internship-title">My Internships</h1>
                  <span>
                    <img src={internship} width="35px" />
                  </span>
                </div>
                <div className="codecTechnologies">
                  <h1 className="codec-title">Web Developer Intern</h1>
                  <p className="codec-description">
                    Worked as a Web Developer Intern at Codec Technologies,
                    where I contributed to designing and developing responsive
                    websites. My work included building user-friendly landing
                    pages, ensuring mobile-first responsiveness, and optimizing
                    website performance for better user experience
                  </p>
                  <button className="codec-btn hover-btn">
                    <a
                      className="codec-link"
                      href={certificate}
                      target="_blank" // <-- Add this
                      rel="noopener noreferrer" // <-- For security
                    >
                      Certificate
                    </a>
                  </button>
                </div>
              </div>
            )}

            {/* Background section Start From Here */}
            {showContent === "background" && (
              <div className="showBackground">
                <div className="backgroundheading">
                  <h1 className="background-title">My Background</h1>
                  <span>
                    <img src={contact} width="35px" />
                  </span>
                </div>
                <div className="background-section">
                  <h1 className="background-title">Academic Background</h1>
                  <p className="background-description">
                    I'm currently pursuing a Bachelor of Science in Information
                    Technology at GN Khalsa College, Mumbai, with an expected
                    graduation in May 2026. My academic journey has equipped me
                    with a strong foundation in programming, databases,
                    networking, web technologies, and software engineering. I’ve
                    consistently focused on mastering both the theoretical and
                    practical aspects of IT, with a special interest in backend
                    development, .NET technologies, and artificial intelligence.
                    Through hands-on projects like Fresh Cart, a full-stack
                    grocery management system, I’ve applied classroom concepts
                    to real-world solutions—emphasizing clean architecture,
                    secure authentication, and polished UI/UX. My coursework and
                    self-driven learning have helped me build expertise in
                    languages and tools such as C++, Python, JavaScript, HTML,
                    CSS, Bootstrap, PHP, MySQL, and the .NET ecosystem. I
                    believe in continuous growth, adaptability, and building
                    tech that makes a difference
                  </p>
                </div>

                {/* Education Section Start From Here */}
                <div className="education-section">
                  <h1 className="education-title">Education Background</h1>
                  <p className="education-description">
                    <p>
                      Bachelor Of Science in Information Technology - Degree
                    </p>
                    <p>CGPA : 9.00</p>
                    <p>Commerce - Higher Secondary Education of Maharashtra</p>
                    <p>Percentage : 72.00 %</p>
                  </p>
                </div>
                <div className="professional-section">
                  <h1 className="professional-title">Professional Strength</h1>
                  <p className="professional-description">
                    <p>Logical Thinking & Problem Solving</p>
                    <p>Maintain Clean Code & Documentation</p>
                    <p>Write Clean Code with Following File Structure</p>
                  </p>
                </div>
                <div className="extra-curiculam-section">
                  <h1 className="extra-curiculam-title">
                    Extra Curiculam Activities
                  </h1>
                  <p className="extra-curiculam-description">
                    <p>
                      Volunteered At G.N. Khalsa College - IT Fest 2023 - 2024 -
                      2025 - 2026 Contributed as Event Head in Web Designing. 
                    </p>
                    <p>
                      Volunteered in Digital Literacy & Training Program under
                      Khel Khel Mein Programme – Wockhardt Foundation.
                    </p>
                  </p>
                </div>
                <div className="language-section">
                  <h1 className="language-title">Languages</h1>
                  <p className="language-description">
                    <p>English - Professional</p>
                    <p>Urdu - Professional</p>
                    <p>Hindi - Intermediate</p>
                    <p>Marathi - Intermediate</p>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Brand Section / Newsletter Style Bio */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              Mohammad Adil. <span>DEV</span>
            </h2>
            <p className="footer-bio">
              Passionate Full Stack Developer specializing in the MERN stack and
              .NET ecosystem. Focused on building secure, scalable, and
              user-centric digital solutions.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Mohammad-Adil-01">
                <img src={github} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/mohammad-adil-shaikh-166822301/">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a href="https://x.com/Adil2486">
                <img src={x} alt="X" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li onClick={() => setshowContent("skill")}>Technical Skills</li>
              <li onClick={() => setshowContent("project")}>Latest Projects</li>
              <li onClick={() => setshowContent("background")}>
                Academic Profile
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p>Mumbai, Maharashtra, India</p>
            <p className="footer-email">mohammadadil2486@gmail.com</p>
            <p>+91 9833261164</p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright-box">
            <img src={copyright} className="copyright-icon" alt="copyright" />
            <span>{dates} Mohammad Adil Shaikh. All Rights Reserved.</span>
          </div>
          <div className="footer-status">
            <span className="status-dot"></span> Available for Opportunities
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
