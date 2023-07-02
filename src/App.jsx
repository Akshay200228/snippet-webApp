import React, { useEffect, useState } from 'react';
import styles from './style';
import { Navbar } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Preloader from './constants/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the preloader
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden scroll-smooth" style={{ backgroundColor: '#0C0E15' }}>
      {isLoading ? (
        // Preloader component
        <Preloader />
      ) : (
        <>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Home />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
