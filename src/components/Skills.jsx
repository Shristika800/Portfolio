import './css files/skills.css'

const skillCategories = [
  {
    icon: '🧠', name: 'ML / Data Science',
    tags: ['Scikit-learn', 'Pandas', 'NumPy', 'Regression', 'Classification', 'Clustering', 'SMOTE', 'Feature Engineering', 'Gradient Boosting'],
    hot: ['Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    icon: '⚙️', name: 'MLOps & APIs',
    tags: ['FastAPI', 'REST APIs', 'Pydantic', 'Git', 'Jupyter', 'OpenAPI', 'Stratified K-Fold'],
    hot: ['FastAPI', 'REST APIs', 'Pydantic'],
  },
  {
    icon: '☁️', name: 'Cloud & Databases',
    tags: ['AWS SageMaker', 'Azure ML', 'AWS S3', 'MySQL', 'PostgreSQL'],
    hot: ['AWS SageMaker', 'Azure ML'],
  },
  {
    icon: '💻', name: 'Languages',
    tags: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    hot: ['Python', 'SQL'],
  },
  {
    icon: '📊', name: 'Visualization',
    tags: ['Tableau', 'Power BI', 'EDA', 'Feature Importance'],
    hot: ['Tableau', 'Power BI'],
  },
  {
    icon: '🌐', name: 'Frontend & Backend',
    tags: ['React.js', 'Node.js', 'Tailwind CSS', 'Express', 'MongoDB'],
    hot: ['React.js', 'Node.js'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-label reveal-on-scroll">Tech Stack</div>
      <h2 className="section-title reveal-on-scroll">Tools I build with.</h2>

      <div className="skills-container">
        {skillCategories.map((cat, i) => (
          <div className={`skill-category reveal-on-scroll reveal-delay-${(i % 3) + 1}`} key={cat.name}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-name">{cat.name}</div>
            </div>
            <div className="skill-tags">
              {cat.tags.map(tag => (
                <span className={`skill-tag ${cat.hot.includes(tag) ? 'hot' : ''}`} key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
