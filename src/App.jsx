import React from 'react';
import styles from './style';
import { Navbar, Hero1, Footer, Testimonials } from './components';

const App = () => {
  return (
    <div className='w-full overflow-hidden' style={{backgroundColor: '#0C0E15'}}>
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
          <Testimonials />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;
