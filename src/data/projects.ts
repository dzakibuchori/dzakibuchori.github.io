export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: "Personal" | "Professional";
}

export const projects: Project[] = [
  {
    title: "XDesa",
    description: "AI-powered smart village and management system",
    image: "/projects/xdesa.webp",
    tags: ["Next.js", "Go", "LiveKit"],
    link: "/projects/xdesa",
    category: "Personal",
  },
  {
    title: "Unit4 FP&A",
    description: "Enterprise-grade financial planning application",
    image: "/projects/u4fpa.webp",
    tags: ["Angular", "Java EE"],
    link: "/projects/u4fpa",
    category: "Professional",
  },
  {
    title: "Unit4 CP",
    description: "Enterprise-grade compensation planning application",
    image: "/projects/u4cp.webp",
    tags: ["Angular", "Spring Boot"],
    link: "/projects/u4cp",
    category: "Professional",
  },
];
