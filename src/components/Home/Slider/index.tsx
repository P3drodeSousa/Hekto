import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

import { faker } from "@faker-js/faker";

type Props = {};

const HomeSlider = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    appendDots: (dots: boolean | undefined) => <ul>{dots}</ul>,
    customPaging: (i: number) => <div className="home-slider-custom"></div>,
  };
  return (
    <section>
      <Slider {...settings} className="home-slider relative mb-32">
        <Slide color="#F2F0FF" />
        <Slide color="#bc5090" />
        <Slide color="#ef5675" />
      </Slider>
    </section>
  );
};

export default HomeSlider;
