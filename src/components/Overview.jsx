import React from 'react'
import styles from '../style'
import { price } from '../assets'

const Overview = () => {
  return (
    <section id="overview" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Discount */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={price} alt="price" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> Use For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-poppins font-semibold ss:text-[42px] text-[45px] text-white ss:leading-[70px] leading-[75px] text-left">
            The <span className="text-gradient">FASTEST</span> Way To Write <br className="hidden sm:block" /> Copy For Your{" "}
            <span className="text-gradient">WEBSITE</span>
          </h1>
        </div>

        {/* Paragraph */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fees.
        </p>
      </div>
    </section>
  )
}

export default Overview