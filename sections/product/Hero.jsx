"use client";

import styles from "../../styles";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const Hero = ({ title, bg }) => {
  return (
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 h-[500px] w-[95%]  bg-center mx-auto rounded-3xl ${bg}	`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto `}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroSmHeading}
          >
            {title}
          </motion.h1>

          <motion.div variants={textVariant(1.2)}>
            <h1 className={styles.heroGrSmHeading}>Universe</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=" mt-3  "
        >
          <a href="#explore">
            <div className="w-full flex justify-center relative z-10">
              <button
                type="button"
                className=" rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 w-[400px] h-[70px] text-2xl 
              font-extrabold  leading-normal text-slate-300   "
              >
                🚀 Explore all the planets!
              </button>
            </div>
          </a>{" "}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
