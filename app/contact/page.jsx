import React from 'react'
import BannerSection from '../component/contact/BannerSection'
import ContactArea from '../component/contact/ContactArea'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Us section of SDU'
}

const page = () => {
  return (
    <>
      <BannerSection />
      <ContactArea />
    </>
  )
}

export default page