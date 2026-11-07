import { useEffect, useState } from "react";
import { links, pipeline } from "../data.js";
import Flow from "../components/Flow.jsx";

const roles = ["DataOps Engineer", "Data Engineer", "Pipeline Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return <header id="top" className="hero"><div className="orb o1" /><div className="orb o2" /><div className="grid-bg" /><div className="wrap hero-in"><p className="status"><i /> Open to DataOps &amp; Data Engineer roles</p><h1>Hi, I’m Fatma.<br /><span className="grad" key={roleIndex}>{roles[roleIndex]}</span></h1><p className="lead">I build reliable batch and real-time data pipelines, with the quality checks, monitoring and automation that keep them trustworthy in production.</p><Flow steps={pipeline} /><div className="btns"><a className="btn primary" href="#projects">View my work</a><a className="btn" href={`mailto:${links.email}`}>Get in touch</a><a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a><a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div></header>;
}
