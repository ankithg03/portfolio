import React, { useEffect, useState } from "react";

import "./Cardcomp.css";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const Cardcomp = () => {
  return (
    <ParallaxBanner
          layers={[
            { image: '/images/home-banner-4.jpg', speed: -20 },
            {
              speed: -40,
              children: (
                <div className="absolute inset-0 flex items-center justify-center font-NotoSan">
                  <h1 className="mx-4 text-7xl md:text-8xl bg-black bg-opacity-20 text-white font-PPMori p-2"><b>Build with </b><i>logic</i>, <b>shape the future!</b></h1>
                </div>
              ),
            },
          ]}
          className="aspect-[1/3] md:aspect-[5/4]"
        />
  )
};

export default Cardcomp;
