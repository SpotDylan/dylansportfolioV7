'use client';

import AnimatedItem from './AnimatedItem';
import { getContent } from '@/utils/contentParser';

export default function Connect() {
  const { connect } = getContent();
  
  return (
    <div className="w-full mb-12">
      <AnimatedItem delay={0}>
        <h2 className="text-xl font-medium mb-6">Connect</h2>
      </AnimatedItem>
      <div className="space-y-4">
        {connect.map((item, index) => (
          <AnimatedItem key={item.label} delay={50 * (index + 2)}>
            <a 
              href={item.url} 
              target={item.url.startsWith('mailto:') ? undefined : "_blank"} 
              rel={item.url.startsWith('mailto:') ? undefined : "noopener noreferrer"} 
              className="block hover:text-gray-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}
