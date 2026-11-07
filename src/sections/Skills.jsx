import { skills } from "../data.js";
import Reveal from "../components/Reveal.jsx";
import Section from "../components/Section.jsx";

export default function Skills() {
  return <Section id="skills" title="Skills" sub="The tools I use to build, test, orchestrate and monitor data pipelines."><div className="cards">{skills.map((group, index) => <Reveal key={group.title} delay={index * 70} className="card"><h3>{group.title}</h3><div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div></Section>;
}
