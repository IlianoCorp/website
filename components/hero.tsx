"use client";
import { Spacer, Button, Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Star4 from "../svgs/star-img.svg";

export default function Hero() {
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
    <section className="bg-[#070707] w-auto">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ x: 2, opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          src={Star4}
          alt="Side"
          className="absolute block overflow-x-hidden left-[-410px] top-[145px] md:top-[200px] md:left-[-400px] lg:top-[230px] lg:left-[-340px] lg:w-[80px] md:w-[80px] sm:w-[60px]"
        ></Image>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial={{ x: 2, opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          src={Star4}
          alt="Side"
          className="absolute block overflow-x-hidden left-[-370px] top-[105px] md:top-[170px] md:left-[-350px] sd:top-[100px] sd:left-[-950px] lg:top-[200px] lg:left-[-290px] w-[50px] sm:w-[25px]"
        ></Image>
      </motion.div>

      <div className="flex hero justify-center items-center w-auto mx-auto px-4 sm:px-6 h-screen md:h-[90vh]">
        <div className="star2  pb-12 pt-52">
          <div className="star text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-6xl text-transparent bg-gradient-to-t bg-clip-text dark:text-zinc-200 font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="relative whitespace-nowrap">
                <span className="relative text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
                  We create{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
                    YOUR
                  </span>{" "}
                  website{" "}
                </span>
              </span>
              <br />
              <span className="relative text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
                as{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  YOU
                </span>{" "}
                want it to be
              </span>
            </h1>
            <br />
            <p
              className="text-xl dark:text-zinc-400 text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              I empower aspiring developers with Informative videos and create{" "}
              <br />
              eye-catching portfolios to enhance their professional appeal.
              Let&apos;s elevate your coding journey together!
            </p>
            <div className="flex justify-center">
              <Button color="primary" className="dark:bg-zinc-200" radius="lg">
                GET IN TOUCH
              </Button>
              <Spacer x={4} />
              <Button variant="bordered" radius="lg">
                VIEW ALL WORKS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <Divider className="my-4" />
    </section>
  );
}
