import HeaderComponent from "../components/Layout/Header";
import SubHeaderComponent from "../components/Layout/SubHeader";
import FeaturedProducts from "../components/Products/Featured";
import LatestProducts from "../components/Products/Latest";
import Shopex from "../components/Home/Shopex";
import Trending from "../components/Home/Trending";
import TrendingProducts from "../components/Products/Trending";
import HomeSlider from "../components/Home/Slider";
import Dicount from "../components/Products/Discount";
import TopCategories from "../components/Products/TopCategories";
import Banner from "../components/Home/Banner";
import BlogSection from "../components/Home/Blog";
import FooterComponent from "../components/Layout/Footer";

function HomePage() {
  return (
    <div className="min-h-screen w-screen">
      <SubHeaderComponent />
      <HeaderComponent />
      <HomeSlider />
      <FeaturedProducts />
      <LatestProducts />
      <Shopex />
      <Trending />
      <TrendingProducts />
      {/* <Dicount /> */}
      <TopCategories />
      <Banner />
      <BlogSection />
      <FooterComponent />
    </div>
  );
}

export default HomePage;
