import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Reviews } from "@/components/home/reviews";
import { CustomCakesCTA } from "@/components/home/custom-cakes-cta";
import { InstagramGallery } from "@/components/home/instagram-gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Reviews />
      <CustomCakesCTA />
      <InstagramGallery />
    </>
  );
}
