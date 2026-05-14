import './Hero.css'

const stats = [
  { num: '89', suffix: '%', label: 'Churn Model Accuracy' },
  { num: '91', suffix: '%', label: 'Credit Risk AUC-ROC' },
  { num: '<120', suffix: 'ms', label: 'API Response Latency' },
  { num: '2', suffix: '×', label: 'AWS + Azure Certified' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow2" />

      <div className="hero-eyebrow">ML Engineer · M.Tech Data Science · IIT Guwahati</div>

      <h1 className="hero-name">
        <div>SHRISTIKA</div>
        <div className="line2 glitch" data-text="RAI">RAI</div>
      </h1>

      <p className="hero-desc">
        Building <strong>end-to-end ML pipelines</strong> on 100K+ record datasets. Deploying production REST APIs with <strong>&lt;120ms latency</strong>. Bridging data science and full-stack engineering to ship things that <strong>actually work</strong>.
      </p>

      <div className="hero-stats">
        {stats.map(s => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h15"/></svg>
          View Projects
        </a>
        <a href="#contact" className="btn-ghost">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
          Get In Touch
        </a>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
