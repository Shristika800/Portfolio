import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">SR<span>.</span></a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">Hire Me</a>
    </nav>
  )
}
