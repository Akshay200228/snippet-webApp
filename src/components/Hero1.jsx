import React from 'react';
import { iMac1, Object_cal, phone, price, model1, model2 } from '../assets';
import styles from '../style';
import './Hero1.css';

const Hero1 = () => {
  return (
    <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 mt-8 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={price} alt="price" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> Use For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-poppins font-semibold ss:text-[42px] text-[45px] text-white ss:leading-[70px] leading-[75px] text-left">
            The <span className="text-gradient">FASTEST</span> Way To Write <br className="hidden sm:block" /> Copy For Your{" "}
            <span className="text-gradient">WEBSITE</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fees.
        </p>
      </div>

      {/* Models */}
      <div className="flex items-end justify-end flex-1">
        <div className={`relative flex justify-end w-full h-screen ${styles.flexCenter}`}>
          <div className="absolute left-0 right-0 z-10 mx-auto sm:right-12 top-28 sm:top-20 animate-custom-bounce">
            <img src={iMac1} alt="" className="object-none object-top mx-auto" />
          </div>
          <div className="absolute z-10 right-2 sm:bottom-1/4 sm:right-36 animate-custom-bounce">
            <img src={phone} alt="" className="object-none object-bottom mx-auto" />
          </div>
          <div className="absolute left-0 z-10 sm:bottom-1/4 bottom-1/3 animate-custom-bounce">
            <img src={Object_cal} alt="" className="object-none object-bottom mx-auto" />
          </div>

          <img src={model1} alt="Model 1" className="object-cover w-1/2 h-4/6 sm:h-full relative z-[5]" />
          <img src={model2} alt="Model 2" className="object-cover w-1/2 h-4/6 sm:h-full relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-0 w-[40%] h-[35%] top-0 purple__gradient" />
          <div className="absolute z-1 w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 purple__gradient" />
          {/* gradient end */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero1;
