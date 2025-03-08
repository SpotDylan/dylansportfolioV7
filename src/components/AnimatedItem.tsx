'use client';

import { useEffect, useState, ReactNode } from 'react';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedItem({ children, delay = 0 }: AnimatedItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset to invisible state when component mounts
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="transition-all duration-700 ease-out will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
