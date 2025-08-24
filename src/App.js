import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';





function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Khaled Mu'azu</h1>
        <div className="contact-info">
          <div className="contact-item">
            <i className="bi bi-envelope-at-fill"></i>
            <span>khaledmuazu@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="bi bi-phone-fill"></i>
            <span>+447964752865</span>
          </div>
          <div className="contact-item">
            <i className="bi bi-geo-fill"></i>
            <span>London</span>
          </div>
        </div>
      </div>

      <div className="content">
        <section className="section">
          <h2>Professional Summary</h2>
          <div className="summary">
            Frontend-focused Software Engineer with experience designing and
            developing <strong>user-friendly, AI-enhanced applications</strong>.
            Skilled in <strong>UI/UX design, frontend engineering, and modern web technologies</strong>.
            Strong foundation in building responsive, scalable, and maintainable
            solutions using <strong>React, Tailwind CSS, and Node.js</strong>. Passionate about combining AI with
            intuitive user interfaces to improve user experiences.
          </div>
        </section>

        <section className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-list">
                HTML | CSS | JavaScript | React | Tailwind CSS | Remix | Vite
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & APIs</h3>
              <div className="skill-list">
                Node.js | REST API Development | Python (basic)
              </div>
            </div>
            <div className="skill-category">
              <h3>Design & UX</h3>
              <div className="skill-list">
                Wireframing | Prototyping | Responsive UI/UX | Accessibility
              </div>
            </div>
            <div className="skill-category">
              <h3>Version Control & Tools</h3>
              <div className="skill-list">
                Git / GitHub | Agile Methodologies | Technical Documentation
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Technical Skills</h3>
              <div className="skill-list">
                Troubleshooting | IT asset management | Cybersecurity fundamentals
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Technical Projects</h2>

          <div className="project">
            <h3>
              AI-Integrated Dashboard
              <span className="tech-stack">React, Tailwind CSS, Node.js</span>
            </h3>
            <ul>
              <li>Built a responsive dashboard with <strong>real-time AI-powered insights</strong></li>
              <li>Designed <strong>intuitive UI/UX</strong> workflows with accessibility-first principles</li>
              <li>Integrated Node.js backend services to handle API communication</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              Portfolio Website
              <span className="tech-stack">Remix & Vite</span>
            </h3>
            <ul>
              <li>Developed a <strong>fast, responsive portfolio website</strong> with a modern tech stack</li>
              <li>Implemented animations, clean UI components, and SEO-friendly structure</li>
              <li>Leveraged <strong>Remix routing</strong> and <strong>Vite bundling</strong> for performance optimization</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              Task Manager Application
              <span className="tech-stack">React, Tailwind CSS</span>
            </h3>
            <ul>
              <li>Designed and developed a <strong>to-do application</strong> with filtering, sorting, and persistence</li>
              <li>Focused on <strong>UI/UX improvements</strong>, ensuring seamless user experience across devices</li>
              <li>Applied component-based architecture for scalability</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Professional Experience</h2>
          <div className="work-entry">
            <div className="work-header">
              <div className="work-title">Software Engineer — Pathfind AI</div>
              <div className="work-period">Jan 2024 – Present</div>
            </div>
            <ul>
              <li>Designed and implemented <strong>frontend interfaces</strong> for AI-driven applications</li>
              <li>Improved <strong>UI/UX workflows</strong> with reusable React components & Tailwind CSS layouts</li>
              <li>Collaborated with AI engineers to <strong>integrate machine learning models</strong> into user-facing features</li>
              <li>Worked with <strong>Remix and Vite</strong> to optimize builds and improve app performance</li>
              <li>Contributed to technical documentation and product design discussions</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;