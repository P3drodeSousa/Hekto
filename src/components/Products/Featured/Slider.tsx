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

const settings = {
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
  appendDots: (dots: React.ReactNode) => (
    <ul style={{ position: "relative", top: -75 }}>{dots}</ul>
  ),
  customPaging: (i: number) => (
    <div className="ft-slick__dots--custom">
      <div className="loading" />
    </div>
  ),
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

const FeaturedSlider = (props: Props) => {
  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return <Slide key={index} img={slide.img} />;
        })}
      </Slider>
    </div>
  );
};

export default FeaturedSlider;
