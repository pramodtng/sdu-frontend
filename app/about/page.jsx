
import React from 'react'
import BannerSection from '../component/about/BannerSection'
import AboutSection from '../component/about/AboutSection'
import WhyChooseUs from '../component/about/WhyChooseUs'


export const metadata = {
  title: 'About Us',
  description: 'Details about SDU',
}

const page = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <WhyChooseUs />
    </>
  )
}

export default page