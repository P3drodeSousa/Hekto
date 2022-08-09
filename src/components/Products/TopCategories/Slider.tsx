import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

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

const sliderSettings = {
  dots: true,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  speed: 500,
  arrows: false,
  adaptiveHeight: true,
  appendDots: (dots: boolean | undefined) => <ul>{dots}</ul>,
  customPaging: (i: number) => <div className="home-slider-custom"></div>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const CategoriesSlider = (props: Props) => {
  return (
    <div className="relative">
      <Slider {...sliderSettings} className="top-categories-slider">
        {slides.map((slide, index) => {
          return <Slide key={slide.img} />;
        })}
      </Slider>
    </div>
  );
};

export default CategoriesSlider;
