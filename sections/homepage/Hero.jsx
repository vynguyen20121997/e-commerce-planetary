'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Planetary
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Havan</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/hero-cover.jpg"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 2)}
          className="relative w-full md:-mt-[20px] -mt-[12px] z-20"
        >
          <a href="#explore">
            <div className="w-full flex justify-center sm:-mt-[40px] -mt-[50px] pl-[80px] relative z-10">
              <button
                type="button"
                className="inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[500px] h-[80px] text-2xl 
              font-extrabold  leading-normal text-slate-300   "
              >
                🚀 Explore the Universes!
              </button>
            </div>
          </a>{' '}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
