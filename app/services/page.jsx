
import React from 'react'
import ServiceOverview from '../component/services/ServiceOverview'
import BannerSection from '../component/services/BannerSection'
import TechnologyUsed from '../component/services/TechnologyUsed'


export const metadata = {
  title: 'Services',
  description: 'List of services'

}
export async function getServices() {
  const services = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=*`)
  return await services.json()
}


const page = async() => {
   const services = await getServices();
  return (
    <>
      <BannerSection />
      <ServiceOverview service={services}/>
      <TechnologyUsed />
    </>
  )
}

export default page