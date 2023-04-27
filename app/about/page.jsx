
import React from 'react'
import BannerSection from '../component/about/BannerSection'
import AboutSection from '../component/about/AboutSection'
import WhyChooseUs from '../component/about/WhyChooseUs'
import TeamSection from '../component/about/TeamSection'


export const metadata = {
  title: 'About Us',
  description: 'Details about SDU',
}
export async function getTeams(){
  const teams =await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/teams?populate=*`,
    { cache: "no-cache" });
   return await teams.json();
}

const page = async() => {
  const teams = await getTeams()
  return (
    <>
      <BannerSection />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection team={teams}/>
    </>
  )
}

export default page