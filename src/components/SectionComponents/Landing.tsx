import React, { useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import Bg from "../CommonComponents/Bg/Bg";
import gsap from "gsap";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

/**  @ts-ignore */
const scrambleText = (el, finalText, duration = 2) => {
  const iterations = finalText.length * 5;
  const intervalTime = (duration * 1000) / iterations;

  let currentIteration = 0;
  const scrambleInterval = setInterval(() => {
    const newText = finalText
      .split("")
      /**  @ts-ignore */

      .map((char, i) => {
        if (currentIteration / 5 > i) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    el.textContent = newText;
    currentIteration++;

    if (currentIteration > iterations) {
      clearInterval(scrambleInterval);
      el.textContent = finalText;
    }
  }, intervalTime);
};

const Landing = () => {
  const textRef = useRef(null);

  useEffect(() => {
    scrambleText(textRef.current, "Ankith G", 2.5);
  }, []);

  return (
    <>
      {/* Section 1 Ankith G */}
      <section className="section1 w-full h-screen flex items-center flex-col -gap-5 justify-end relative banner-hero">
        <Bg />
        <div className="ScrollDown absolute bottom-32 md:bottom-16 ">
          <Parallax speed={6}>
            <div className="icon"></div>
          </Parallax>
        </div>
        <Parallax speed={-5} scale={[0.5, 2]}>
          <h2
            ref={textRef}
            className="box text-arrival flex justify-between font-NotoSans text-white text-[18vw] md:text-[14vw] lg:text-[20vw] font-bold p-10 ankith-text -mt-28 md:-mt-10 banner-text"
          >
            ANKITH G
          </h2>
        </Parallax>
      </section>
    </>
  );
};

export default Landing;
