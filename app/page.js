import BannerSection from "./component/home/BannerSection";
import CounterSection from "./component/home/CounterSection";
import IndustriesSection from "./component/home/IndustriesSection";
import ProductSection from "./component/home/ProductSection";
import ServiceSection from "./component/home/ServiceSection";
import Testimonials from "./component/home/Testimonials";



export default function Home() {
  return (
    <>
      <BannerSection />
      <ProductSection />
      <ServiceSection />
      <CounterSection />
      <IndustriesSection />
      <Testimonials />
    </>
  )
}
