"use client";
import star from "../svgs/star-img (1).svg";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <main className="features">
      <div className=" flex flex-wrap md:gap-40 justify-center mt-14 mb-20">
        <img
          className="opacity-90 w-[580px] h-[420px] sizecoin "
          alt=""
          src="/images/coin.png"
        />
        {/*Feature 1*/}
        <div className="flex flex-col flex-wrap items-start justify-center ">
          <div className="absolute">
            <img className="w-40" src={star} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ y: 12 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="cointext text-3xl  text-transparent bg-gradient-to-t bg-clip-text dark:text-zinc-200 font-extrabold leading-tighter tracking-tighter mb-4"
            >
              <span className=" whitespace-nowrap">
                <span className=" text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
                  The better the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
                    website
                  </span>{" "}
                </span>
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
                The more{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  clients
                </span>{" "}
                <br />
                <span>
                  The more{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-400">
                    $$$
                  </span>
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="oder2 flex md:flex-wrap md:gap-40 justify-center text-31xl text-black-black-100 font-body-14">
        {/*Feature 2*/}
        <div className="flex flex-col items-start sm:order-2 justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ y: 12 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="oder1 cointext text-3xl  text-transparent bg-gradient-to-t bg-clip-text dark:text-zinc-200 font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className=" whitespace-nowrap">
                <span className=" text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
                  The better the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
                    website
                  </span>{" "}
                </span>
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-t bg-clip-text from-zinc-500 dark:to-white to-black">
                The more{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  clients
                </span>{" "}
                <br />
                <span>
                  The more{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-400">
                    $$$
                  </span>
                </span>
              </span>
            </div>
          </motion.div>
        </div>
        <img
          className="oder mr-30 opacity-90 w-[580px] h-[420px] sizecoin"
          alt=""
          src="/images/coin.png"
        />
      </div>
      <img src="" alt="" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute w-auto"
      >
        <path
          fill="#09090B"
          fill-opacity="1"
          d="M0,96L48,96C96,96,192,96,288,128C384,160,480,224,576,213.3C672,203,768,117,864,96C960,75,1056,117,1152,112C1248,107,1344,53,1392,26.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </main>
  );
}
