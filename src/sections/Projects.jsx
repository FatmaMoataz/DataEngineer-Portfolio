import { projects } from "../data.js";
import Flow from "../components/Flow.jsx";
import Reveal from "../components/Reveal.jsx";
import Section from "../components/Section.jsx";

export default function Projects() {
  return <Section id="projects" title="Projects" sub="Streaming platforms, warehouses and data lakes.">{projects.map((project) => <Reveal key={project.title} delay={60} className={`proj ${project.flagship ? "flagship" : ""}`}><div className="proj-head"><h3>{project.title}{project.subtitle && <small>{project.subtitle}</small>}</h3>{project.flagship && <span className="badge">Flagship</span>}</div><div className="tags mono">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.summary && <p className="muted">{project.summary}</p>}{project.flow && <Flow steps={project.flow} />}<ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>{project.repo && <a className="link" href={project.repo} target="_blank" rel="noreferrer">View on GitHub →</a>}</Reveal>)}</Section>;
}
