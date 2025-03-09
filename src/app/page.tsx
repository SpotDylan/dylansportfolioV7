'use client';

import Image from "next/image";
import { useState } from "react";
import { Mail } from "@geist-ui/icons";
import About from "@/components/About";
import Connect from "@/components/Connect";
import Projects from "@/components/Projects";
import SectionContainer from "@/components/SectionContainer";
import AnimatedItem from "@/components/AnimatedItem";
import { getContent } from "@/utils/contentParser";

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const { name, title, footerLinks } = getContent();
  
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center max-w-2xl w-full mx-auto flex-grow">
        {/* Profile section */}
        <div className="flex flex-col items-center mb-10">
          <AnimatedItem delay={100}>
            <div className="w-10 h-10 mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9.5H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9.5H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </AnimatedItem>
          
          <AnimatedItem delay={200}>
            <h1 className="text-2xl font-bold mb-1">{name}</h1>
          </AnimatedItem>
          
          <AnimatedItem delay={300}>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{title}</p>
          </AnimatedItem>
          
          {/* Navigation */}
          <AnimatedItem delay={400}>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveSection('about')} 
                className={`${
                  activeSection === 'about' 
                    ? 'nav-item-active' 
                    : 'nav-item-inactive'
                } transition-colors duration-200`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('connect')} 
                className={`${
                  activeSection === 'connect' 
                    ? 'nav-item-active' 
                    : 'nav-item-inactive'
                } transition-colors duration-200`}
              >
                Connect
              </button>
              <button 
                onClick={() => setActiveSection('projects')} 
                className={`${
                  activeSection === 'projects' 
                    ? 'nav-item-active' 
                    : 'nav-item-inactive'
                } transition-colors duration-200`}
              >
                Projects
              </button>
            </div>
          </AnimatedItem>
        </div>

        {/* Content sections */}
        <div className="w-full relative mb-8">
          {activeSection === 'about' && (
            <SectionContainer key="about-section" isActive={true}>
              <About />
            </SectionContainer>
          )}
          
          {activeSection === 'connect' && (
            <SectionContainer key="connect-section" isActive={true}>
              <Connect />
            </SectionContainer>
          )}
          
          {activeSection === 'projects' && (
            <SectionContainer key="projects-section" isActive={true}>
              <Projects />
            </SectionContainer>
          )}
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-16">
        {footerLinks.map((link, index) => (
          <AnimatedItem key={link.label} delay={500 + (index * 50)}>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.iconType === "component" && link.icon === "envelope" ? (
                <Mail size={16} />
              ) : (
                <Image
                  aria-hidden
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={16}
                  height={16}
                />
              )}
              {link.label}
            </a>
          </AnimatedItem>
        ))}
      </footer>
    </div>
  );
}
