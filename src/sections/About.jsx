import Reveal from "../components/Reveal.jsx";
import Section from "../components/Section.jsx";

export default function About() {
  return <Section id="about" title="About"><Reveal className="about"><p>I’m a junior Data Engineer with a software engineering background (BSc Computer Science, Alexandria University, Excellent with Honors) and a graduate of the NTI DataOps Engineering Hire Ready program.</p><p>I move data from relational sources into warehouses, staging layers and BI-ready marts, and I care about what makes pipelines dependable: data quality, reconciliation, audit logging, monitoring, CI/CD and governed access. My React and Node.js experience helps me build pipelines that fit into real products.</p></Reveal></Section>;
}
