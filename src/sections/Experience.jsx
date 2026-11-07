import { education, experience } from "../data.js";
import Reveal from "../components/Reveal.jsx";
import Section from "../components/Section.jsx";

export default function Experience() {
  return <Section id="experience" title="Experience"><div className="timeline">{experience.map((job, index) => <Reveal key={job.role} delay={index * 80} className="job"><h3>{job.role}</h3><div className="org">{job.org}</div><div className="date">{job.date}</div><p>{job.text}</p></Reveal>)}</div><Reveal><h3 className="edu-t">Education &amp; Certifications</h3><ul className="edu">{education.map((item) => <li key={item}>{item}</li>)}</ul></Reveal></Section>;
}
