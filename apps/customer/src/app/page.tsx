import Category from "../components/(category)/Category";
import ProductPopular from "../components/(popularPro)/ProductPro";
import Banner from "../components/banner/Banner";
import Video from "../components/intro/Video";
import Testimonial from "../components/testimonial/Testimonial";
import Partners from "../components/partner/Partners";
import Marketing from "../components/marketing/Marketing";
import Hero from "../components/hero/Hero";

export default function Page(): JSX.Element {

  return (
    <>
      <Hero />
      <Category />
      <ProductPopular />
      <Banner />
      <Video />
      <Marketing />
      <Partners />
      <Testimonial />
    </>
  )
}
