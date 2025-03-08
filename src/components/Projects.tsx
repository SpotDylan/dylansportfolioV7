'use client';

import AnimatedItem from './AnimatedItem';
import Link from 'next/link';
import { getContent } from '@/utils/contentParser';

export default function Projects() {
  const { projects } = getContent();

  // Function to render project links
  const renderProjectLinks = (github: string, liveSite: string) => {
    return (
      <div className="flex gap-3 mt-2">
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="View GitHub repository"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.008C9.52 20.768 9.512 20.058 9.508 19.258C6.726 19.858 6.139 17.918 6.139 17.918C5.685 16.818 5.028 16.508 5.028 16.508C4.128 15.928 5.095 15.941 5.095 15.941C6.092 16.011 6.626 16.93 6.626 16.93C7.521 18.43 8.969 17.963 9.539 17.708C9.631 17.08 9.889 16.613 10.175 16.348C7.954 16.078 5.62 15.272 5.62 11.449C5.62 10.371 6.01 9.495 6.646 8.819C6.545 8.565 6.201 7.54 6.746 6.158C6.746 6.158 7.586 5.892 9.496 7.189C10.295 6.97 11.15 6.86 12 6.856C12.85 6.86 13.705 6.97 14.504 7.189C16.414 5.892 17.254 6.158 17.254 6.158C17.799 7.54 17.455 8.565 17.354 8.819C17.99 9.495 18.38 10.371 18.38 11.449C18.38 15.283 16.042 16.075 13.813 16.34C14.172 16.67 14.492 17.325 14.492 18.323C14.492 19.756 14.479 20.679 14.479 21.008C14.479 21.275 14.659 21.587 15.167 21.49C19.138 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
            </svg>
          </a>
        )}
        {liveSite && (
          <a 
            href={liveSite} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="View live site"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    );
  };
  return (
    <div className="w-full">
      <AnimatedItem delay={0}>
        <h2 className="text-xl font-medium mb-6">Selected Projects</h2>
      </AnimatedItem>
      
      {/* Project items */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <AnimatedItem key={project.title} delay={100 * (index + 1)}>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-5">
              <h3 className="font-medium mb-1">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{project.year} · {project.categories}</p>
              <p className="text-gray-800 dark:text-gray-200">{project.description}</p>
              {renderProjectLinks(project.github, project.liveSite)}
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}
