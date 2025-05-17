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
const HomeComp: React.FC<HomeType> = ({ isMobile }:HomeType ): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [loadingAnimation, setLoadingAnimation] = useState(false);

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
      <About isMobile={isMobile} />
      <Photo />
      <Projects/>
      


      <Contact/>
    </main>
  );
};

export default HomeComp;
