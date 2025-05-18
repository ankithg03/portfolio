"use client";

import HomeComp from "@/components/HomeComp";
import React from "react";
import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { useRouter } from "next/navigation";
import Gyroscope from "@/components/CommonComponents/Gyroscope/Gyroscope";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ResumeComponent } from "@/components/ResumeComponent";

export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const lenis = useLenis(({ scroll }) => {});

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (min-width: 1000px)").matches
    );
  }, [isMobile]);

  const runLoading = async () => {
    await delay(800);
    setIsLoading(true);
  };

  useEffect(() => {
    runLoading();
  });

  return (
    <div className="flex w-ful overflow-x-hidden">
      {isLoading ? (
        isMobile ? (
          <Cursor
            isGelly={false}
            cursorBackgrounColor="#ffffffcc"
            cursorSize={30}
            exclusionBackgroundColor="#000"
            cursorInnerColor="#000"
            colorAnimationDuration={0.5}
            sizeAnimationDuration={1}
          />
        ) : (
          <Gyroscope />
        )
      ) : (
        <></>
      )}
      <ParallaxProvider>
        <ReactLenis
          root
          options={{
            lerp: isMobile ? 0.05 : 0.06,
            syncTouch: true,
            smoothTouch: true,
          }}
        >
          <ResumeComponent isMobile />
        </ReactLenis>
      </ParallaxProvider>
    </div>
  );
}
