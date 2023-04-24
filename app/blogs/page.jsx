import React from 'react'
import BannerSection from '../component/blogs/BannerSection'
import Blogs from '../component/blogs/Blogs'
import Categories from '../component/blogs/Categories'

export const metadata = {
  title: 'Blogs',
  description: "Updates from SDU"
}

const page = () => {
  return (
    <>
      <BannerSection />
      {/* <Categories /> */}
      <Blogs />
    </>
  )
}

export default page