import React from 'react';
import Spline from '@splinetool/react-spline';
import ContactForm from './ContactForm';
import styles from '../style';

const About = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col lg:flex-row h-screen`}>
      <div className="flex-1 lg:order-2">
        <Spline scene="https://prod.spline.design/pXCMJVRC9ixKeQ63/scene.splinecode" />
      </div>
      <div className="flex-1 lg:order-1">
        <div className="lg:max-w-[500px] lg:mx-auto">
          <h2 className="mb-4 md:text-[36px] sm:text-[36px] text-[26px] font-bold text-gradient">Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default About;
