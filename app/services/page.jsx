
import React from 'react'
import ServiceOverview from '../component/services/ServiceOverview'
import BannerSection from '../component/services/BannerSection'
import TechnologyUsed from '../component/services/TechnologyUsed'


export const metadata = {
  title: 'Services',
  description: 'List of services'

}

const page = () => {
  return (
    <>
      <BannerSection />
      <ServiceOverview />
      <TechnologyUsed />
    </>
  )
}

export default page