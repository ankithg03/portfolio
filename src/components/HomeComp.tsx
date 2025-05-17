/* eslint-disable @next/next/no-img-element */
"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import Landing from "./SectionComponents/Landing";
import Loading from "./SectionComponents/Loading";
import Photo from "./SectionComponents/Photo";
import About from "./SectionComponents/About";
import Projects from "./SectionComponents/Projects";
import Contact from "./SectionComponents/Contact";
type HomeType = { isMobile: boolean }
import Vimeo from '@u-wave/react-vimeo';

const HomeComp: React.FC<HomeType> = ({ isMobile }:HomeType ): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<any>(null);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const runLoading = async () => {
    setLoadingAnimation(true);
    await delay(1000);
    setLoading(false);
  };

  useEffect(() => {
    runLoading();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      console.log('aaa', videoRef.current, videoRef.current.play)
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main
      className={
        loading
          ? `main w-screen h-screen overflow-hidden `
          : `main w-screen flex flex-col items-center justify-center home`
      }
    >
      <Loading loading={loading} loadingAnimation={loadingAnimation} />
      <Landing />
      <Photo />
      <About isMobile={isMobile} />
      <section
        className="w-full	"
        data-cursor-text="Move The Mouse"
        data-cursor-size={100}
      >
        <Vimeo
          ref={videoRef}
          video="1085323471"
          autoplay={isPlaying}
          responsive
          transparent
          showTitle={false}
          showPortrait={false}
          background={false}
          muted={false}
          controls={true}
        />
      </section>
      <Projects/>
      


      <Contact/>
    </main>
  );
};

export default HomeComp;
