import './css files/about.css'

const certs = [
  { icon: '☁️', name: 'AWS Certified Data Analytics – Specialty', org: 'Amazon Web Services' },
  { icon: '🔷', name: 'Microsoft Azure Data Scientist Associate', org: 'Microsoft' },
]

const timeline = [
  { year: '2024–26', role: 'M.Tech in Data Science', org: 'IIT Guwahati', desc: 'ML Systems Design, Feature Engineering, Model Deployment, Deep Learning. 82.7% weighted score.' },
  { year: '2023–24', role: 'Diploma in Full Stack Web Development', org: 'Dice Academy, New Delhi', desc: 'Python/FastAPI backends + React.js frontends. REST API design and async patterns.' },
  { year: '2019–23', role: 'B.Tech in Computer Science & Engineering', org: 'IIT Guwahati', desc: 'Core CS fundamentals, algorithms, data structures, software engineering, and systems programming.' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-label reveal-on-scroll">About</div>
      <h2 className="section-title reveal-on-scroll">From IIT labs to<br />production ML systems.</h2>

      <div className="about-grid">
        <div className="about-text reveal-on-scroll">
          <p>I'm an ML Engineer with hands-on experience building and deploying <strong>end-to-end machine learning pipelines</strong> on large-scale datasets. M.Tech in Data Science from <strong>IIT Guwahati</strong> with a weighted score of 82.7%.</p>
          <p>My work sits at the intersection of ML systems design, API engineering, and full-stack development. I've productionized models via FastAPI, applied MLOps best practices, and deployed on <strong>AWS SageMaker</strong> and <strong>Azure ML</strong>.</p>
          <p>Beyond the models, I build the interfaces that make them usable — from React dashboards to Tableau/Power BI reports that communicate ML insights to business stakeholders.</p>

          <div className="about-certs">
            {certs.map(c => (
              <div className="cert-badge" key={c.name}>
                <div className="cert-icon">{c.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-timeline reveal-on-scroll reveal-delay-2">
          {timeline.map((t, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-year">{t.year}</div>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-role">{t.role}</div>
                <div className="timeline-org">{t.org}</div>
                <div className="timeline-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
