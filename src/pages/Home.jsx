import React from 'react'
import { About, Footer, Hero1, Status, Testimonials } from '../components'
import styles from '../style'

const Home = () => {
    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Status />
                <About />
                <Testimonials />
                <Footer />
            </div>
        </div>
    )
}

export default Home