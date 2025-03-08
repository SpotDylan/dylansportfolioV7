'use client';

import { useEffect, useState } from 'react';

export default function FloatingGradients() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      
      <style jsx global>{`
        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.35;
          mix-blend-mode: screen;
          animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        
        .blob-1 {
          width: 25vw;
          height: 25vw;
          background: linear-gradient(135deg, #320e6c 0%, #6c2575 100%);
          top: 15%;
          left: 70%;
          animation-name: floating-1;
          animation-duration: 25s;
        }
        
        .blob-2 {
          width: 20vw;
          height: 20vw;
          background: linear-gradient(135deg, #3514b2 0%, #491678 100%);
          bottom: 20%;
          left: 10%;
          animation-name: floating-2;
          animation-duration: 28s;
        }
        
        .blob-3 {
          width: 15vw;
          height: 15vw;
          background: linear-gradient(135deg, #350e86 0%, #2c0a7d 100%);
          top: 45%;
          right: 25%;
          animation-name: floating-3;
          animation-duration: 20s;
        }
        
        @keyframes floating-1 {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          100% {
            transform: translate(100px, 50px) rotate(20deg) scale(1.1);
          }
        }
        
        @keyframes floating-2 {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          100% {
            transform: translate(-80px, -40px) rotate(-15deg) scale(1.15);
          }
        }
        
        @keyframes floating-3 {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          100% {
            transform: translate(60px, -70px) rotate(10deg) scale(1.1);
          }
        }
        
        @media (prefers-reduced-motion) {
          .gradient-blob {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
