import FeaturedProducts from "../components/Products/Featured";
import LatestProducts from "../components/Products/Latest";
import Shopex from "../components/Home/Shopex";
import Trending from "../components/Home/Trending";
import TrendingProducts from "../components/Products/Trending";
import HomeSlider from "../components/Home/Slider";
import TopCategories from "../components/Products/TopCategories";
import Banner from "../components/Home/Banner";
import BlogSection from "../components/Home/Blog";

function HomePage() {
  return (
    <>
      <HomeSlider />
      <FeaturedProducts />
      <LatestProducts />
      <Shopex />
      <Trending />
      <TrendingProducts />
      <TopCategories />
      <Banner />
      <BlogSection />
    </>
  );
}

export default HomePage;
