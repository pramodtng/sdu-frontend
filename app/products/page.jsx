import React from 'react'
import BannerSection from '../component/product/BannerSection'
import ProductsShow from '../component/product/ProductsShow'


export const metadata = {
  title: 'Products',
  description: 'List of products developed by SDU'
}

const pages = () => {
  return (
    <>
      <BannerSection />
      <ProductsShow />
    </>
  )
}

export default pages