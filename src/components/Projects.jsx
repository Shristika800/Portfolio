import './Projects.css'

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const projects = [
  {
    num: '01 — FEATURED',
    title: 'Customer Churn Prediction — End-to-End MLOps Pipeline',
    featured: true,
    metrics: [
      { val: '89%', label: 'Accuracy' },
      { val: '100K', label: 'Records' },
      { val: '<120ms', label: 'API Latency' },
    ],
    desc: 'Full ML pipeline from data ingestion → feature engineering → model training → REST deployment. Trained ensemble classifier on 100K-row dataset. Handled class imbalance via SMOTE and validated with stratified k-fold cross-validation. Deployed production REST service with auto-generated OpenAPI docs and Pydantic input validation.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'SMOTE', 'Pydantic'],
  },
  {
    num: '02',
    title: 'Credit Risk Analysis & ML Dashboard',
    metrics: [
      { val: '91%', label: 'AUC-ROC' },
      { val: '50K', label: 'Loan Records' },
    ],
    desc: 'Analyzed 50K loan records, identified top risk drivers via feature importance and EDA. Trained Gradient Boosting classifier achieving 91% AUC-ROC with cross-validation. Built Tableau and Power BI dashboards to communicate model insights and risk segmentation to business stakeholders.',
    stack: ['Python', 'Scikit-learn', 'Tableau', 'Power BI', 'SQL', 'Gradient Boosting'],
  },
  {
    num: '03',
    title: 'House Price Prediction API',
    metrics: [
      { val: '−12%', label: 'RMSE Reduction' },
      { val: '80K+', label: 'Property Records' },
    ],
    desc: 'Built and compared regression models (Random Forest + Ridge Regression) on 80K+ property records. Selected ensemble approach for superior non-linear pattern capture. Reduced RMSE by 12% over linear baseline via hyperparameter tuning. Deployed inference service via FastAPI with request validation and auto-generated API docs.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Random Forest', 'Ridge Regression', 'REST'],
  },
  {
    num: '04',
    title: 'Content-Based Recommendation System',
    desc: 'Prototyped a content-based recommendation system using Scikit-learn, enabling personalized suggestions and improving user engagement on the platform. Integrated and maintained REST APIs consumed by React applications with query optimization and caching strategies.',
    stack: ['Python', 'Scikit-learn', 'REST API', 'React', 'Caching'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label reveal-on-scroll">Work</div>
      <h2 className="section-title reveal-on-scroll">ML systems I've shipped.</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className={`project-card reveal-on-scroll reveal-delay-${(i % 2) + 1} ${p.featured ? 'featured' : ''}`} key={p.num}>
            <div className="project-num">{p.num}</div>
            <div className="project-title">{p.title}</div>
            {p.metrics && (
              <div className="project-metrics">
                {p.metrics.map(m => (
                  <div className="metric" key={m.label}>
                    <div className="metric-val">{m.val}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="project-desc">{p.desc}</div>
            <div className="project-stack">
              {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
            </div>
            <div className="project-links">
              <a href="https://github.com/Shristika800" target="_blank" rel="noreferrer" className="project-link">
                <GithubIcon /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
