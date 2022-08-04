import HeaderComponent from "../components/Layout/Header";
import SubHeaderComponent from "../components/Layout/SubHeader";
import PromotionalImg from "../assets/promotional.png";
import FeaturedProducts from "../components/Products/Featured";
import LatestProducts from "../components/Products/Latest";
import Shopex from "../components/Home/Shopex";
import Trending from "../components/Home/Trending";
import TrendingProducts from "../components/Products/Trending";

// TODO ADD SLIDER

function HomePage() {
  return (
    <div className="min-h-screen w-screen">
      <SubHeaderComponent />
      <HeaderComponent />
      <section>
        <img src={PromotionalImg} />
        Sherlock
      </section>
      <FeaturedProducts />
      <LatestProducts />
      <Shopex />
      <Trending />
      <TrendingProducts />
      <div className="flex justify-center items-center bg-yellow-200 h-96">
        <h1 className="text-3xl font-bold text-pink ">Hello world !</h1>
      </div>
    </div>
  );
}

export default HomePage;
