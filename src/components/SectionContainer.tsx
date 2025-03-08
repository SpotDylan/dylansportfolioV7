'use client';

import { useEffect, useState, ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  isActive: boolean;
}

export default function SectionContainer({ children, isActive }: SectionContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      // Small delay to ensure DOM update before animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for fade-out animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!shouldRender) return null;

  return (
    <div
      className="transition-all duration-300 ease-in-out w-full"
      style={{ 
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)'
      }}
    >
      {children}
    </div>
  );
}
