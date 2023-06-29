import React from 'react'
import { Footer, Hero1, Overview, Testimonials } from '../components'
import styles from '../style'

const Home = () => {
    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Overview />
                <Testimonials />
                <Footer />
            </div>
        </div>
    )
}

export default Home