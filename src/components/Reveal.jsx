import { useEffect, useRef, useState } from "react";

function useInView(once = true) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        if (once) io.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [once]);
  return [ref, seen];
}

export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, seen] = useInView();
  return <div ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
