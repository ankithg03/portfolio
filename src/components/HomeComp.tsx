/* eslint-disable @next/next/no-img-element */
"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import Landing from "./SectionComponents/Landing";
import Loading from "./SectionComponents/Loading";
import Photo from "./SectionComponents/Photo";
import About from "./SectionComponents/About";
import Projects from "./SectionComponents/Projects";
import Contact from "./SectionComponents/Contact";
type HomeType = { isMobile: boolean };
import dynamic from "next/dynamic";
const Vimeo: any = dynamic(
  () => import("@u-wave/react-vimeo").then((m) => m.default as any),
  { ssr: false },
);
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";
import s from "./HomeComponent.module.scss";
import clsx from "clsx";

const HomeComp: React.FC<HomeType> = ({ isMobile }: HomeType): JSX.Element => {
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
      <div className="w-full md:px-4 gap-x-4">
        <motion.div
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          initial={{ opacity: 0, letterSpacing: "50px" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{
            duration: 1.1,
            bounce: 0.5,
          }}
          /* @ts-ignore */
          className="text-5xl md:text-[25vh] text-opacity-5 rotate-0 text-center md:px-4 py-2 text-port-secondary font-NotoSans font-bold overflow-x-hidden md:overflow-x-visible  pt-[13%]"
        >
          <Parallax scale={[isMobile ? 1 : 1, isMobile ? 3 : 5]}>VLOG</Parallax>
        </motion.div>
      </div>
      <section
        className="w-full	grid grid-cols-1 md:grid-cols-2 md:px-4 gap-x-4"
        data-cursor-size={100}
      >
        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto",
            s["vimeo-section"],
          )}
          data-cursor-text="Play"
        >
          <Vimeo
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
          <Vimeo
            video="1085402032"
            responsive
            transparent
            showTitle={false}
            showPortrait={false}
            controls={true}
          />
        </div>
        <div className="grid md:gap-4">
          <ParallaxBanner
            layers={[
              { image: "/images/home-banner-2.jpg", speed: -20 },
              {
                speed: -25,
                children: (
                  <div className="absolute inset-0 flex items-center justify-center font-PPMori">
                    <h1 className="text-2xl bg-black px-4 py-2 text-white font-normal">
                      Save the <b>Planet</b>. Ride a <i>bike.</i>
                    </h1>
                  </div>
                ),
              },
            ]}
            className="aspect-[2/3] md:aspect-[2/1] md:rounded-md"
          />
          <ParallaxBanner
            layers={[
              { image: "/images/home-banner-3.jpg", speed: -20 },
              {
                speed: -25,
                children: (
                  <div className="absolute inset-0 flex items-center justify-center font-PPMori">
                    <h1 className="text-2xl bg-black text-white px-4 py-2 font-normal">
                      Choose only one master—<i>nature</i>.
                    </h1>
                  </div>
                ),
              },
            ]}
            className="aspect-[2/3] md:aspect-[2/1] md:rounded-md"
          />
        </div>
      </section>
      <Projects />

      <Contact />
    </main>
  );
};

export default HomeComp;
