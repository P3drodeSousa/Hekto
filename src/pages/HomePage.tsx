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
      <div className="flex justify-center items-center bg-yellow-200 h-96">
        <h1 className="text-3xl font-bold text-pink ">Hello world !</h1>
      </div>
    </div>
  );
}

export default HomePage;
