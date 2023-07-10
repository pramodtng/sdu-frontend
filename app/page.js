import BannerSection from "./component/home/BannerSection";
import CounterSection from "./component/home/CounterSection";
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
export async function getTestimonial() {
  const test = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/testimonials?populate=*`)
  return await test.json()
}



const Home = async() =>{
  const res1 = await getFeaturedPostsOne()
  const res2 = await getFeaturedPostsTwo()
  const test = await getTestimonial()
  return (
    <>
      <BannerSection />
      <ProductSection res1 = {res1} res2 = {res2} />
      <ServiceSection />
      <CounterSection />
      {/* <IndustriesSection /> */}
      {/* <Testimonials test={test}/> */}
    </>
  )
}


export default Home