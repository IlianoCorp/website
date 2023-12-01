"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Quote() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
              className="absolute rounded-2xl w-[0px] top-[-1rem] lg:w-auto "
              alt="Image"
              ref={ref}
              animate={controls}
              initial={{ x: 2, opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
      <div className="flex flex-wrap justify-center lg:justify-between md:justify-center sm:justify-between ">
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
        <div className="md:pr-24 flex  w-auto text-left  text-black-black-100 font-body-14">
          <div className="outer yosemite w-auto h-[400px]">
            <div className="dot red"></div>
            <div className="dot amber"></div>
            <div className="dot green"></div>
            <h1 className="px-2 text-3xl text-black font-bold mt-[30%]">
              See the impact, <br /> Your success, <br /> Powered by our
              website.{" "}
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
