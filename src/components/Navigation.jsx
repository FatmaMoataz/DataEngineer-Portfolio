export default function Navigation() {
  return <nav className="nav"><div className="wrap nav-in"><a href="#top" className="logo">fatma<span>.</span>moataz</a><div className="nav-links">{["about", "skills", "projects", "experience", "contact"].map((section) => <a key={section} href={`#${section}`}>{section}</a>)}</div></div></nav>;
}
