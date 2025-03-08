'use client';

import AnimatedItem from './AnimatedItem';
import { getContent } from '@/utils/contentParser';
import Link from 'next/link';
import PhotoSlider from './PhotoSlider';

// Custom animated link component
const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative inline-block group"
    >
      <span className="text-[#4031cc] font-medium">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4031cc] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// Function to render paragraph with links
const renderParagraphWithLinks = (text: string) => {
  // Replace Myerson Research Group with link
  if (text.includes("Myerson Research Group")) {
    const parts = text.split("Myerson Research Group");
    return (
      <>
        {parts[0]}
        <AnimatedLink href="https://myersongroup.mit.edu/">Myerson Research Group</AnimatedLink>
        {parts[1]}
      </>
    );
  }
  
  // Replace MPFI with link
  if (text.includes("MPFI")) {
    const parts = text.split("MPFI");
    return (
      <>
        {parts[0]}
        <AnimatedLink href="https://mpfi.org/science/our-labs/bidaye-lab/">MPFI</AnimatedLink>
        {parts[1]}
      </>
    );
  }
  
  // Return regular text if no links
  return text;
};

export default function About() {
  const { about } = getContent();
  
  return (
    <div className="w-full mb-12">
      <AnimatedItem delay={0}>
        <h2 className="text-xl font-medium mb-6">About</h2>
      </AnimatedItem>
      <div className="space-y-4">
        {about.map((paragraph, index) => (
          <AnimatedItem key={index} delay={100 * (index + 1)}>
            <p>{renderParagraphWithLinks(paragraph)}</p>
          </AnimatedItem>
        ))}
      </div>
      
      <AnimatedItem delay={500}>
        <PhotoSlider />
      </AnimatedItem>
    </div>
  );
}
