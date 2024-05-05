import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ id, imgUrl, title, index, handleClick }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <motion.div
        className="relative overflow-hidden min-w-[300px]  rounded-xl flex justify-center items-center"
        key={id}
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span>Explore Now</span>
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="   flex flex-col justify-between">
          <div className="flex justify-center items-center">
            <Image src={imgUrl} width={800} height={800} alt={index} />
          </div>
          <div className=" text-center">
            <h1
              className=" text-2xl 
              font-extrabold  leading-normal text-slate-300"
            >
              {title}
            </h1>
          </div>
        </div>{" "}
      </motion.div>
    </>
  );
};

export default Card;
