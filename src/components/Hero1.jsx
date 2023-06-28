import React from 'react';
import { iMac1, Object_cal, phone, price, model3, model2 } from '../assets';
import styles from '../style';
import './Hero1.css';
import { motion } from "framer-motion";


const Hero1 = () => {

  return (
    <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 mt-8 sm:px-16 px-6`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {/* Discount */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={price} alt="price" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> Use For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-poppins font-semibold ss:text-[42px] text-[45px] text-white ss:leading-[70px] leading-[75px] text-left">
            The <span className="text-gradient">FASTEST</span> Way To Write <br className="hidden sm:block" /> Copy For Your{" "}
            <span className="text-gradient">WEBSITE</span>
          </h1>
        </div>

        {/* Paragraph */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fees.
        </p>
      </motion.div>

      {/* Models */}
      <div className="flex items-end justify-end flex-1">
        <div className={`relative flex justify-end w-full h-screen ${styles.flexCenter}`}>
          {/* iMac Image */}
          <div className="absolute left-0 right-0 z-10 mx-auto sm:right-12 top-28 sm:top-20 animate-custom-bounce">
            <motion.img
              src={iMac1}
              alt=""
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="object-none object-top mx-auto"
            />
          </div>

          {/* Phone Image */}
          <div className="absolute z-10 right-2 sm:bottom-1/4 sm:right-36 animate-custom-bounce">
            <motion.img
              src={phone}
              alt=""
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="object-none object-bottom mx-auto"
            />
          </div>

          {/* Object Calendar Image */}
          <div className="absolute left-0 z-10 sm:bottom-1/4 bottom-1/3 animate-custom-bounce">
            <motion.img
              src={Object_cal}
              alt=""
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="object-none object-bottom mx-auto"
            />
          </div>

          {/* Model 1 Image */}
          <motion.img
            src={model3}
            alt="Model 1"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0 }}
            className="object-cover w-1/2 h-4/6 sm:h-full relative z-[5]"
          />

          {/* Model 2 Image */}
          <motion.img
            src={model2}
            alt="Model 2"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0 }}
            className="object-cover w-1/2 h-4/6 sm:h-5/6 relative z-[5]"
          />

          {/* Gradients */}
          {/* Gradient 1 */}
          <div className="absolute z-0 w-[40%] h-[35%] top-0 purple__gradient" />
          {/* Gradient 2 */}
          <div className="absolute z-1 w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          {/* Gradient 3 */}
          <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 purple__gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
