import React from 'react';
import { testimonials } from '../constants/index';
import ClientSlider from './ClientSlider';
import styles from '../style';

const Testimonials = () => {
  const { title, clients } = testimonials;

  return (
    <section
      id='Testimonials'
      className={`${styles.paddingX} ${styles.paddingX} md:mt-20`}
    >
      <div
        className='flex flex-col items-center justify-center w-full md:flex-row'
        data-aos='fade-down'
        data-aos-delay='500'
      >
        <h1 className='font-poppins text-center font-semibold text-[36px] sm:text-[36px] text-[26px] text-white ss:leading-[65px] leading-[50px]'>
          The <span className='text-gradient'>FASTEST</span> Way To Write{" "}
          <br className='hidden sm:block' /> Copy For Your{" "}
          <span className='text-gradient'>WEBSITE</span>
        </h1>
      </div>

      <div className='container mx-auto' data-aos='fade-right' data-aos-delay='500'>
        <h2 className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'>
          {title}
        </h2>
        <div className='mx-auto max-w-[920px]'>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
