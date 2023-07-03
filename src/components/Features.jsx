import React from 'react';
// import data
import { features } from '../constants/index';
import styles from '../style';

const Features = () => {
  // destructure features
  const { feature1 } = features;
  // destructure feature1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
  return (
    <section id='features' className={`${styles.paddingY} xl:px-0 sm:px-16 px-6 mt-8`}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
            <div className="text-lg lg:text-[22px] text-dimWhite mb-4 lg:mb-6 uppercase font-normal">{pretitle}</div>
            <h2 className='mb-4 text-6xl font-bold text-white lg:text-8xl'>{title}</h2>
            <p className={`${styles.paragraph} mb-4`}>{subtitle}</p>
            <button className='flex items-center text-xl text-white transition-all lg:text-2xl gap-x-3 hover:gap-x-5'>
              {btnLink} <img src={btnIcon} alt='' />
            </button>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
