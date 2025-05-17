"use client";
import React from "react";
import ProjectCard from '@/components/ProjectCard';
import { ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";


import { ReactLenis } from "@studio-freight/react-lenis";
import ProjectBanner from "@/components/ProjectBanner";

const projects = [{
  name: "Ank Music",
  description: "The Ank Music player",
  image: '/images/projectImages/ank-music.gif',
  github: "https://github.com/ankithg03/music-player",
  link: "https://ank-music-player.vercel.app/",
  stack: ["React", "NextJS", "NodeJS"],
},
{
  name: "Instagram",
  description: "Instagram profile :P",
  image: "/images/projectImages/instagram.png",
  stack: ["Just my Insta"],
},
{
  name: "Delivery Design",
  description: "Figma Design for Delivery App",
  image: "/images/projectImages/Dashboard.png",
  stack: ["Figma", "Vector Design"],
},
{
  name: "Quiz",
  description: "A simple Quiz App",
  image: '/images/projectImages/quiz.gif',
  link: "https://quiz-ankithg.vercel.app/",
  stack: ["NextJs", "NodeJS"],
},
{
  name: "GruhaPravesha",
  description: "A simple web invitation App for house warming",
  image: "/images/projectImages/GruhaPravesha.png",
  github: "https://github.com/ankithg03/house-warming",
  stack: ["Next", "Scss"],
},
{
  name: "Github Profile",
  description: "My github profile :p",
  image: "/images/projectImages/Github.png",
  github: "https://github.com/ankithg03",
  stack: ["Readme"],
}
];

const Projects = () => {
  return (
    <ParallaxProvider>
        <ReactLenis
          root
          options={{
            lerp:  0.06,
            syncTouch: true,
            smoothTouch: true,
          }}
        >
          <main
            className={
                `main w-screen flex flex-col items-center justify-center pt-24`
            }
          >
            <ProjectBanner />
            <div className="container mx-auto py-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </main>
        </ReactLenis>
      </ParallaxProvider>
  );
};

export default Projects;


