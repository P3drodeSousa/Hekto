import ChairImg from "../../../assets/chair.png";
import FeaturedProductMenu from "./Menu";

type Props = {};

const Slide = ({}: Props) => {
  return (
    <div className="mr-8 mb-28 flex flex-col product-slider-featured relative cursor-pointer">
      <FeaturedProductMenu />

      <div className="bg-gray h-64 grid place-items-center">
        <img src={ChairImg} alt={`slide${ChairImg}`} />
        <button className="product-slider-featured-details-btn">
          View Details
        </button>
      </div>

      <div className="flex flex-col items-center py-3 product-slider-featured-container ">
        <h2 className="text-lg text-pink font-bold font-lato my-1">
          Cantilever chair
        </h2>

        <div className="flex my-2">
          <span className="w-4 bg-offGreen h-1 mr-1 rounded-2xl"></span>
          <span className="w-4 bg-pink h-1 mr-1 rounded-2xl"></span>
          <span className="w-4 bg-navyblue h-1 mr-1 rounded-2xl"></span>
        </div>

        <span className="font-josefin product-slider-featured-span">
          Code - Y523201
        </span>

        <span className="font-lato product-slider-featured-span">$42.00</span>
      </div>
    </div>
  );
};

export default Slide;
