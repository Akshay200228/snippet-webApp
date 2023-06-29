import React from 'react';
import { motion } from 'framer-motion';
import { iMac1, Object_cal, phone, price, model3, model4 } from '../assets';
import styles from '../style';
import './Hero1.css';

const Hero1 = () => {
  return (
    <section id="hero" className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      {/* Left side */}
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Discount */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={price} alt="price" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> Use For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-poppins font-semibold ss:text-[42px] text-[45px] text-white ss:leading-[70px] leading-[75px] text-left">
            The <span className="text-gradient">FASTEST</span> Way To Write <br className="hidden sm:block" /> Copy For Your{' '}
            <span className="text-gradient">WEBSITE</span>
          </h1>
        </div>
      </motion.div>

      {/* Right side */}
      {/* Models */}
      <div className={`${styles.flexCenter} pt-6 flex items-end justify-end flex-1 lg:mt-0`}>
        <div className={`relative flex justify-end w-full h-[60vh] sm:h-screen pr-6 sm:pr-0`}>

          {/* iMac Image */}
          <div className="absolute top-0 left-0 right-0 z-10 mx-auto sm:right-2 sm:top-16 animate-custom-bounce">
            <motion.img
              src={iMac1}
              alt=""
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-3/12 mx-auto h-1/w-3/12 sm:h-full sm:w-full sm:object-none sm:object-top"
            />
          </div>

          {/* Phone Image */}
          <div className="absolute z-10 right-14 sm:bottom-1/4 bottom-1/3 animate-custom-bounce">
            <motion.img
              src={phone}
              alt=""
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-1/2 mx-auto sm:h-full sm:w-full sm:object-bottom h-1/2 sm:object-none"
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
              className="w-1/2 mx-auto sm:h-full sm:w-full sm:object-bottom h-1/2 sm:object-none"
            />

          </div>

          <motion.img
            src={model3}
            alt="Model 1"
            className="object-cover w-1/2 h-4/6 sm:h-5/6 relative z-[5]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.img
            src={model4}
            alt="Model 2"
            className="object-cover w-1/2 h-3/5 top-8 sm:h-4/5 sm:top-4 relative z-[5]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Gradients */}
          {/* Gradient 1 */}
          <div className="absolute z-0 w-[40%] h-[35%] top-0 right-0 purple__gradient" />
          {/* Gradient 2 */}
          <div className="absolute z-1 w-[80%] h-[80%] rounded-full white__gradient top-0 right-0" />
          {/* Gradient 3 */}
          <div className="absolute z-0 w-[50%] h-[50%] right-0 top-0 blue__gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
