import BannerSection from "./component/home/BannerSection";
import CounterSection from "./component/home/CounterSection";
import IndustriesSection from "./component/home/IndustriesSection";
import ProductSection from "./component/home/ProductSection";
import ServiceSection from "./component/home/ServiceSection";
import Testimonials from "./component/home/Testimonials";


export async function getFeaturedPostsOne () {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/featured-project1s?populate=*`)
  return await data.json()
}
export async function getFeaturedPostsTwo () {
  const data1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/featured-project2s?populate=*`)
  return await data1.json()
}



const Home = async() =>{
  const res1 = await getFeaturedPostsOne()
  const res2 = await getFeaturedPostsTwo()
  return (
    <>
      <BannerSection />
      <ProductSection res1 = {res1} res2 = {res2} />
      <ServiceSection />
      <CounterSection />
      <IndustriesSection />
      <Testimonials />
    </>
  )
}


export default Home