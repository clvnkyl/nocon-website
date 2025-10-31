import React from "react";
import { useInView } from "react-intersection-observer";
import "./AnimatedSection.css";

function AnimatedSection({ children, animation = "fade-up", threshold = 0.1 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,      
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div ref={ref} className={`animated-section ${animation} ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
}

export default AnimatedSection;
