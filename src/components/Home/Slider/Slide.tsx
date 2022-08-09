import Button from "../../utils/Button";
import homeslider from "../../../assets/homeslider/homeslider.png";
import promoSofa from "../../../assets/homeslider/promo_sofa.png";

import { faker } from "@faker-js/faker";

type Props = {
  color: string;
};

const randomName = faker.name.findName();

const Slide = ({ color }: Props) => {
  return (
    <div
      className="h-homeSlider w-screen relative  px-40 flex items-center"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="absolute left-56 top-0">
        <img src={homeslider} alt="" />
      </div>

      <div className="ml-96 flex-1 ">
        <p className="text-pink font-lato font-bold text-base leading-7 mb-6">
          Best Furniture For Your Castle....
        </p>
        <h2 className="font-josefin text-5xl leading-homeSlider font-semibold mb-6">
          New Furniture Collection Trends in 2020
        </h2>
        <p className="text-homeSliderPara font-lato font-bold text-base leading-loose mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <Button text="Shop Now" />
      </div>

      <div className="h-full grid place-items-center flex-1 home-slider relative">
        <img src={promoSofa} alt="" />
        <div className="promo grid place-items-center">
          <span className="font-josefin text-4xl text-white  p-4 text-center">
            50% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
