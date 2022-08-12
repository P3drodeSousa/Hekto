import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { sliderSettings } from "../../utils/sliderSettings";
import ChairImg from "../../../assets/chair.png";

type Props = {};

const slides = [
  {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },
  {
    img: "https://dummyimage.com/600x400/000/dddddd",
  },
  {
    img: "https://dummyimage.com/600x400/000/fff",
  },
  {
    img: "https://dummyimage.com/600x400/000/B22222",
  },
  {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },
  {
    img: "https://dummyimage.com/600x400/000/dddddd",
  },
  {
    img: "https://dummyimage.com/600x400/000/B22222",
  },
  {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
  {
    img: "https://dummyimage.com/600x400/000/ccccc",
  },
  {
    img: "https://dummyimage.com/600x400/000/dddddd",
  },
  {
    img: "https://dummyimage.com/600x400/000/B22222",
  },
  {
    img: "https://dummyimage.com/600x400/000/7CFC00",
  },
];

const FeaturedSlider = (props: Props) => {
  return (
    <div className="relative featured-slider mt-11">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => {
          return <Slide key={index} img={ChairImg} />;
        })}
      </Slider>
    </div>
  );
};

export default FeaturedSlider;
