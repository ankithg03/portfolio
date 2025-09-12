"use client";
import React from "react";
import ProjectCard from "@src/components/ProjectCard";
import { ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";

import { ReactLenis } from "@studio-freight/react-lenis";
import ProjectBanner from "@src/components/ProjectBanner";
import s from "@src/components/ProjectCard/ProjectCard.module.scss";
import clsx from "clsx";

const projects = [
  {
    name: "Logo Design",
    description: "Figma Design for My Logo",
    image: "/images/Logo.png",
    stack: ["Figma", "Vector Design"],
  },
  {
    name: "Ank Music",
    description: "The Ank Music player",
    image: "/images/projectImages/ank-music.gif",
    github: "https://github.com/ankithg03/music-player",
    link: "https://ank-music-player.vercel.app/",
    stack: ["React", "NextJS", "NodeJS"],
  },
  {
    name: "NexPWA",
    description: "Implemented PWA features and extensions like Wishlist etc.",
    image: "/images/projectImages/nexpwa.png",
    link: "https://nexpwa.com/",
    stack: ["Magento", "React", "GraphQL", "PWA"],
  },
  {
    name: "DAMRO India",
    description: "Implemented Abandoned Cart, Store Locator, and etc",
    image: "/images/projectImages/damro.png",
    link: "https://www.damroindia.com/",
    stack: ["Magento", "PHP", "KnockoutJS", "Less"],
  },
  {
    name: "THRiveON",
    description: "Developed donation modules, sliders, and etc.",
    image: "/images/projectImages/thriveon.png",
    stack: ["Magento", "React", "Semantic UI", "PHP"],
  },
  {
    name: "Furtados - Music Ecomm",
    description: "Developed brand listing, blog, FAQ & etc.",
    image: "/images/projectImages/furtados.png",
    link: "https://www.furtadosonline.com/",
    stack: ["Magento", "React", "GraphQL", "Redis"],
  },
  {
    name: "Rely.SG Payment Gateway",
    description:
      "Built promotional blocks, checkout flows including in-context and redirect methods, with order features.",
    image: "/images/projectImages/rely.png",
    github: "https://github.com/RelyGateway/relymagento2",
    stack: ["Magento", "PHP", "JavaScript"],
  },
  {
    name: "Codilar Internal Tools",
    description:
      "Developed Instagram widget, offer blocks in PLP, and testimonial module integration.",
    image: "/images/projectImages/codilar.png",
    github: "https://github.com/codilar",
    stack: ["Magento", "API", "Frontend"],
  },
  {
    name: "RPT (Internal Product)",
    description:
      "Created Laravel app from symphony, and integrated GraphQL, created CLI commands, and EAV models.",
    image: "/images/projectImages/codilar.png",
    stack: ["Magento", "Symfony", "GraphQL", "EAV"],
  },
  {
    name: "Wingreens",
    description: "Built product comparison, mobile login extension, and etc.",
    image: "/images/projectImages/wingreens.png",
    stack: ["Magento", "React", "GraphQL", "Checkout"],
  },
  {
    name: "Mudpie",
    description: "Built the project from scratch with all Ecommerce feature",
    image: "/images/projectImages/mudpie.png",
    link: "https://www.mudpie.com/",
    stack: ["Magento", "React", "GraphQL", "NextJS", "Pylot"],
  },
  {
    name: "Minerva Beauty",
    description: "Developed the Blog, Adon Product, and etc",
    image: "/images/projectImages/minervabeauty.png",
    link: "https://www.minervabeauty.com/",
    stack: ["NextJS", "Magento 2.4"],
  },
  {
    name: "Zayn Myza",
    description: "Designed the Product Card, and Overall website",
    image: "/images/projectImages/zaynmyza.png",
    link: "https://zaynmyza.com/",
    stack: ["ScandiPWA", "Magento 2.4", "ReactJS"],
  },
  {
    name: "American Meadows",
    description: "Developed the Blog, Adon Product, and etc",
    image: "/images/projectImages/americanmeadows.png",
    link: "https://www.americanmeadows.com/",
    stack: ["NextJS", "Magento 2.4"],
  },
  {
    name: "USGB",
    description: "Developed the Riskified, Gold Product Page, and etc",
    image: "/images/projectImages/usgb.png",
    link: "https://www.usgoldbureau.com/",
    stack: ["NextJS", "Magento 2.4"],
  },
  {
    name: "SuperATV",
    description:
      "Integrated Dynamic Yield, & Algolia and Developed FreeGift and etc",
    image: "/images/projectImages/satv.png",
    link: "https://superatv.com/",
    stack: ["NextJS", "ReactJS", "Magento 2.4"],
  },
  {
    name: "OFI",
    description: "Developed Parallax Banner, Announcement Banner and etc",
    image: "/images/projectImages/ofi.png",
    link: "https://ofi.com/",
    stack: ["NextJS", "ReactJS", "Magento 2.4"],
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
    image: "/images/projectImages/quiz.gif",
    link: "https://ankithg-quiz.vercel.app/",
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
  },
];

const Projects = () => {
  return (
    <ParallaxProvider>
      <ReactLenis
        root
        options={{
          lerp: 0.06,
          syncTouch: true,
          smoothTouch: true,
        }}
      >
        <main
          className={`main w-screen flex flex-col items-center justify-center pt-24`}
        >
          <ProjectBanner />
          <div
            className={clsx(
              "container mx-auto py-8 px-4",
              s["project-container"],
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
