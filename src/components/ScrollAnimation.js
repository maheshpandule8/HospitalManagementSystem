import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, animation = 'fadeIn', delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`animate-${animation}`);
            if (delay) {
              entry.target.style.animationDelay = `${delay}ms`;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <div ref={elementRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 