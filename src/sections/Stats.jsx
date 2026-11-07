import { stats } from "../data.js";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";

export default function Stats() {
  return <div className="wrap stats">{stats.map((stat, index) => <Reveal key={stat.label} delay={index * 90} className="stat"><b><Counter {...stat} /></b><span>{stat.label}</span></Reveal>)}</div>;
}
