import React from 'react'
import BannerSection from '../component/blogs/BannerSection'
import Blogs from '../component/blogs/Blogs'

export const metadata = {
  title: 'Blogs',
  description: "Updates from SDU"
}

const page = () => {
  return (
    <>
      <BannerSection />
      <Blogs />
    </>
  )
}

export default page