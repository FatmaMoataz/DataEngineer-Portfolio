import { links } from "../data.js";
import Reveal from "../components/Reveal.jsx";
import Section from "../components/Section.jsx";

export default function Contact() {
  return <Section id="contact" title="Let’s connect" sub="Open to DataOps and Data Engineer roles, and to collaboration on data projects."><Reveal className="btns"><a className="btn primary" href={`mailto:${links.email}`}>{links.email}</a><a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a><a className="btn" href={links.kaggle} target="_blank" rel="noreferrer">Kaggle</a><a className="btn" href={links.leetcode} target="_blank" rel="noreferrer">LeetCode</a></Reveal></Section>;
}
