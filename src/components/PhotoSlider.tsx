'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Custom hook to check media query
const useMediaQuery = () => {
  const [desktopMedium, setDesktopMedium] = useState(false);

  useEffect(() => {
    // Set initial value
    setDesktopMedium(window.matchMedia("(min-width: 768px)").matches);
    
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      setDesktopMedium(e.matches);
    };

    // Modern API
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { desktopMedium };
};

interface PhotoPanelProps {
  id: number;
  title: string;
  imagePath: string;
}

const PhotoSlider = () => {
  const [expandedPanel, setExpandedPanel] = useState(0);
  const { desktopMedium } = useMediaQuery();

  const photos: PhotoPanelProps[] = [
    {
      id: 0,
      title: "",
      imagePath: "/hero_maxplanck.jpg",
    },
    {
      id: 1,
      title: "",
      imagePath: "/hero_jshs.jpeg",
    },
    {
      id: 2,
      title: "",
      imagePath: "/hero_isef.JPG",
    },
    {
      id: 3,
      title: "",
      imagePath: "/hero_spiller.JPG",
    },
  ];

  const handleMouseEnter = (id: number) => {
    setExpandedPanel(id);
  };

  return (
    <div className="photo-slider-container mt-6 mb-8">
      <div className="flex space-x-2 overflow-x-auto">
        {photos.map((photo) => (
          <PhotoPanel
            key={photo.id}
            photo={photo}
            isSelected={expandedPanel === photo.id}
            onMouseEnter={() => handleMouseEnter(photo.id)}
            desktopMedium={desktopMedium}
          />
        ))}
      </div>
    </div>
  );
};

// Separate component for each panel
const PhotoPanel = ({ 
  photo, 
  isSelected, 
  onMouseEnter, 
  desktopMedium 
}: { 
  photo: PhotoPanelProps; 
  isSelected: boolean; 
  onMouseEnter: () => void; 
  desktopMedium: boolean;
}) => {
  const startWidth = desktopMedium ? 70 : 100; // Width when collapsed
  const endWidth = desktopMedium ? 400 : 300; // Width when expanded

  return (
    <div 
      className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out`}
      style={{
        width: isSelected ? `${endWidth}px` : `${startWidth}px`,
        height: "300px",
        transitionProperty: "width",
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={photo.imagePath}
          alt={photo.title}
          fill
          className="object-cover"
        />
        
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
      </div>

      {/* Title */}
      <div
        className={`absolute z-20 text-white font-semibold tracking-wide whitespace-nowrap transition-all duration-500 ease-out`}
        style={{
          bottom: "20px",
          left: isSelected ? "20px" : "50%",
          transform: isSelected ? "none" : "translateX(-50%) rotate(-90deg)",
          transformOrigin: "center",
        }}
      >
        <span>{photo.title}</span>
      </div>
    </div>
  );
};

export default PhotoSlider;
