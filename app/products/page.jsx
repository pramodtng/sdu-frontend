import React from 'react'
import BannerSection from '../component/product/BannerSection'
import ProductsShow from '../component/product/ProductsShow'


export const metadata = {
  title: 'Products',
  description: 'List of products developed by SDU'
}
export async function getProducts() {
  const products = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*`)
  return await products.json()
}


const pages = async() => {
  const products = await getProducts();
 
  return (
    <>
      <BannerSection />
      <ProductsShow product={products}/>
    </>
  )
}

export default pages