'use client';

import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { TitleText, TypingText } from '../../components/homepage';
import Card from '../../components/product/Card';
import { Planets } from '../../constants';
import styles from '../../styles';
import { navVariants, staggerContainer } from '../../utils/motion';

const Products = () => {
  const [ref, { width }] = useMeasure();

  const xTransalation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;
    // eslint-disable-next-line prefer-const
    controls = animate(xTransalation, [0, finalPosition], {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTransalation, width]);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="The Planet" textStyles="text-center" />
        <TitleText
          title={(
            <>
              Choose your planet <br className="md:block hidden" />
            </>
          )}
          textStyles="text-center"
        />
      </motion.div>
      <div className="h-[200px]  mb-32 mt-10">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className=" absolute left-0 flex gap-4 "
          ref={ref}
          style={{ x: xTransalation }}
        >
          {Planets.map((world, index) => (
            <Card key={world.id} {...world} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
