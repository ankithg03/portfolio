import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "Full Stack Developer",
            "Python Engineer",
            "Magento Developer",
            "Open Source Contributor",
            "React Developer",
            "NEXT JS",
            "PWA Engineer",
            "AEM FE Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
