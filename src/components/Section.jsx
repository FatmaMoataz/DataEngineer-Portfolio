import Reveal from "./Reveal.jsx";

export default function Section({ id, title, sub, children }) {
  return <section id={id} className="section"><div className="wrap"><Reveal><h2><span className="bar" />{title}</h2>{sub && <p className="sub">{sub}</p>}</Reveal>{children}</div></section>;
}
