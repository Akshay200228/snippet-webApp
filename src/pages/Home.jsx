import React from 'react'
import { Footer, Hero1, Status, Testimonials, About } from '../components'
import styles from '../style'

const Home = () => {
    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Status />
                <Testimonials />
                <Footer />
                <About />
            </div>
        </div>
    )
}

export default Home