import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      {/* Section 5 */}
      <section id="contact" className="section6 w-full h-screen flex items-center justify-center flex-col-reverse md:flex-row gap-3 md:gap-10 overflow-x-hidden">
        <motion.div
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.9,
          }}
          /* @ts-ignore */
          className="qr relative w-[300px] aspect-square max-w-[70vw] opacity-90 overflow-hidden"
        >
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt=""
              src={"/images/QR.png"}
              fill
              className="object-cover hover:scale-105 duration-300"
              data-cursor-text="resume"
              data-cursor-size={80}
            ></Image>
          </Link>
        </motion.div>
        <div className="font-FiraCode md:leading-loose font-medium text-lg md:text-3xl text-center md:text-left">
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.9,
            }}
          >
            Ankith Ganganna
          </motion.div>
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
            }}
          >
            ankithg03@gmail.com
          </motion.div>
          <div className="links flex gap-5 pr-10 items-center justify-center ml-10 md:ml-0">
            <motion.a
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.9,
              }}
              /* @ts-ignore */
              target="_blank"
              data-cursor-text="visit"
              href="https://github.com/ankithg03"
              className="text-blue-200 hover:text-blue-400 duration-200 flex-shrink-0"
            >
              github
            </motion.a>{" "}
            <motion.a
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                delay: 1.1,
                duration: 0.8,
              }}
              /* @ts-ignore */
              target="_blank"
              data-cursor-text="visit"
              href="https://www.linkedin.com/in/ankith-g-028373140"
              className="text-blue-200 hover:text-blue-400 duration-200 flex-shrink-0"
            >
              linkedin
            </motion.a>{" "}
            <motion.a
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                delay: 1.4,
                duration: 0.7,
              }}
              /* @ts-ignore */
              target="_blank"
              data-cursor-text="visit"
              href="https://www.instagram.com/ankith.ganganna/"
              className="text-blue-200 hover:text-blue-400 duration-200 flex-shrink-0"
            >
              instagram
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
