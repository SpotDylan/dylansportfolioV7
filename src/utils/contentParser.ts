'use client';

// Define types for our content structure
export interface ContentData {
  name: string;
  title: string;
  about: string[];
  connect: {
    label: string;
    url: string;
  }[];
  projects: {
    title: string;
    year: string;
    categories: string;
    description: string;
    github: string;
    liveSite: string;
  }[];
  footerLinks: {
    label: string;
    url: string;
    icon: string;
    iconType?: 'svg' | 'component';
  }[];
}

// Static content data
export function getContent(): ContentData {
  return {
    name: "Dylan Nguyen",
    title: "Applied Math and Computer Science @ MIT. Incoming @ Amazon.",
    about: [
      "I'm a student and researcher at MIT focused on quantitative biology, foundational model research, and chemical engineering research.",
      "Currently working at the Myerson Research Group where I lead the development of control and Bayesian optimization systems for the production of mRNA Lipid Nanoparticles.",
      "Previously did neuroinformatics work with spiking neural networks to create computational models for the Drosophila Melanogaster at the Bidaye Lab at MPFI",
      "When I'm not doing research, building or programming, you can find me playing poker, going to the gym, and practicing my photography skills."
    ],
    connect: [
      {
        label: "Email",
        url: "mailto:dynguyen@mit.edu"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/dylan-nguyenn"
      },
      {
        label: "Twitter",
        url: "https://x.com/dynguyen0"
      },
      {
        label: "GitHub",
        url: "https://github.com/SpotDylan"
      },
    ],
    projects: [
      {
        title: "DELTA: Diffusion Extrapolative Text Model",
        year: "2025",
        categories: "LLaDA, Llama, Speculative Decoding, Diffusion LLMs",
        description: "Speculative decoding with diffusion text LLMs as draft models. Top 10 in the Mercor x Cognition x Etched Hackathon; 2000+ downloads via Hugging Face",
        github: "https://github.com/natask/infra_gpu_hack",
        liveSite: ""
      },
      {
        title: "Aegis",
        year: "2025",
        categories: "Python, Edge Computing, TerraAPI",
        description: "Biomedical device that uses edge computing models and biometric data to administer biochemical agents for soldiers and first responders. Built for Treehacks 2025.",
        github: "https://github.com/SpotDylan/TreeHacks-2025-Fullstack",
        liveSite: "https://tree-hacks-2025-aegis.vercel.app/"
      },
      {
        title: "Automated Platform for Manufacturing Nanoparticles for Drug Delivery Applications",
        year: "2025",
        categories: "Python, Scikit-Optimize, Bayesian Optimization, Dash, Plotly",
        description: "Led the creation of control and Bayesian optimization systems for the development of better mRNA Lipid Nanoparticles. Supervised under Peter Sagmeister.",
        github: "",
        liveSite: "https://brand-identity-showcase.com"
      },
      {
        title: "Tally.AI",
        year: "2024",
        categories: "Python, LLMs, RAG, AWS Lambda, AWS Amplify, Next.js",
        description: "A platform for better research tools for scientists and corporate R&D. Raised pre-seed at $1.2M valuation.",
        github: "",
        liveSite: "https://gotally.ai"
      },
      {
        title: "Spiking Neural Networks for VNC Modelling",
        year: "2023",
        categories: "C++, Python Spiking Neural Networks, Brian2",
        description: "Developed a spiking neural network model in Python and C++ for the modelling of the ventral nerve cord of the Drosophila Melanogaster.",
        github: "",
        liveSite: "https://www.youtube.com/watch?v=qzTPDzeygPI"
      },
      {
        title: "Retriever.AI",
        year: "2023",
        categories: "Python, C#, ElevenLabs",
        description: "An AI-native platform that assists visually impaired users in operating the Windows OS. Built for the ElevenLabs Hackathon.",
        github: "https://github.com/hydrol0x/retriever",
        liveSite: "https://retriever.fyi/"
      },
    ],
    footerLinks: [
      {
        label: "Resume",
        url: "https://drive.google.com/file/d/1vHLpvKQtmdJJILg0Y2WwOhdnUZg8kTmq/view?usp=sharing",
        icon: "/file.svg"
      },
      {
        label: "Say Hello",
        url: "mailto:dynguyen@mit.edu",
        icon: "envelope",
        iconType: "component"
      },
    ]
  };
}
