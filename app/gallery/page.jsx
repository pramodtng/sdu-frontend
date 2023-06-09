import React from 'react'
import BannerSection from '../component/gallery/BannerSection'
import ImageSection from '../component/gallery/ImageSection'

export const metadata = {
  title: 'Gallery',
  description: 'Galleries of the SDU'
}

export async function getImages() {
  const images = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries?populate=*`)
  return await images.json()
}

const page = async() => {
  const images = await getImages();
  return (
    <>
      <BannerSection />
      <ImageSection image={images}/>
    </>
  )
}

export default page