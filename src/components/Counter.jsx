import { useEffect, useRef, useState } from "react";

export default function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  const [n, setN] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!seen) return;
    let raf;
    let start;
    const tick = (time) => {
      start ??= time;
      const progress = Math.min((time - start) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);

  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}
