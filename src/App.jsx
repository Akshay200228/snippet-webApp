import React, { useEffect } from 'react';
import styles from './style';
import { Navbar, Hero1, Footer, Testimonials, Overview } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  }, []);


  return (
    <div className='w-full overflow-hidden' style={{ backgroundColor: '#0C0E15' }}>
      <div className={`${styles.paddingX} ${styles.flexCenter} mb-2`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero1 />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Overview />
          <Testimonials />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;
