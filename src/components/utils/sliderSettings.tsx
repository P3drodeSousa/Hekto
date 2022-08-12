export const sliderSettings = {
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
      breakpoint: 800,
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
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};
