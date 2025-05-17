import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";

export const ProjectBanner = () => {
    const background: BannerLayer = {
      image:
        '/images/project-banner.jpg',
      translateY: [0, 20],
      opacity: [1, 0.3],
      scale: [1.05, 1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
    };
  
    const headline: BannerLayer = {
      translateY: [0, 30],
      scale: [1, 1.05, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="absolute inset-0 flex justify-end items-end mr-4 mb-4 md:items-center md:justify-center">
          <h1 className="text-4xl md:text-8xl text-white font-thin bg-opacity-25 bg-black">
            Projects
          </h1>
        </div>
      ),
    };
  
    const foreground: BannerLayer = {
      image:
        '/images/project-banner.jpg',
      translateY: [0, 15],
      scale: [1, 1.1, 'easeOutCubic'],
      shouldAlwaysCompleteAnimation: true,
    };
  
    const gradientOverlay: BannerLayer = {
      opacity: [0, 0.9],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="absolute inset-0 bg-gradient-to-t" />
      ),
    };
  
    return (
      <ParallaxBanner
        layers={[background,foreground, headline, gradientOverlay]}
        className="aspect-[13/7] md:aspect-[21/17] lg:aspect-[4/2] background-size: contain;"
      />
    );
  };
  export default ProjectBanner;