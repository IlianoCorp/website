"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";



export default function Quote() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, duration: 5.5, },
          opacity: { delay, duration: 0.2 }
        }
      };
    }
};

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 420,
      });
    }
  }, [inView]);
  return (
    <main className="quote">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"
        integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
      />
      <div className="flex justify-center w-auto h-[600px] text-left text-31xl text-black-black-100 font-body-14">
        {/*Feature 1*/}
        <div className=" top-[120px] w-[580px] flex flex-col items-start justify-center gap-[32px]">
          <div className="deck3">
            <motion.img
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              className="absolute rounded-2xl w-[0px] top-[-3rem] lg:w-auto "
              initial={{ opacity: 1, x: 0 }}
              animate="variants"
              exit={{ opacity: 0, x: 15 }}
              transition={{pathLength: { duration: 10.5, }, delay: 0.75 }}
              whileInView={{ opacity: 1, x: 448 }}
            />

            <div className="card3">
              <header className="cardHeader3 pt-6">
                <i className="fab fa-instagram cardHeader_type"></i>
              </header>
              <div className="cardBody3">
                <p className="cardText3">
                  One does not accumulate but eliminate. It is not daily
                  increase but daily decrease. The height of cultivation always
                  runs to simplicity.
                  <span className="cardText_highlight3"></span> <br /> <br />{" "}
                  <span className="cardText_highlight3">- Bruce Lee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mac flex flex-wrap justify-center lg:justify-between md:justify-center sm:justify-between ">
        <div className="stroke pb-4 md:pl-10 highlighted-text-shadow text-center md:text-left text-2xl lg:text-6xl md:text-5xl font-extrabold leading-tighter  font-body-14 first-letter">
          <span className=" whitespace-nowrap">
            <span className=" text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
              Let us build your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
                website
              </span>{" "}
            </span>
          </span>
          <br />
          <span className="text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
            So you can focus on{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              What
            </span>{" "}
            <br />
            <span>
              Truely matters to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-400">
                You
              </span>
            </span>
          </span>
        </div>
        <div className="mac md:mr-24  w-auto text-left  text-black-black-100 font-body-14">
          <div className=" outer yosemite w-[400px] h-[400px]">
            <div className="dot red"></div>
            <div className="dot amber"></div>
            <div className="dot green"></div>
            <div className="px-2 w- text-3xl text-white mt-[30%]">
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("See the impact, <br /> Your success, <br /> Powered by our website.")
                    
                    .start();
                }}
              /></div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
