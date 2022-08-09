import ChairImg from "../../../assets/chair.png";

type Props = {};

const Slide = ({}: Props) => {
  return (
    <div className="mr-8 mb-28 flex flex-col top-categories-container relative cursor-pointer">
      <div className="top-categories-product-background"></div>

      <div className="top-categories-product-foreground">
        <img src={ChairImg} alt={`slide${ChairImg}`} />
        <button className="top-categories-details-btn">View Shop</button>
      </div>

      <div className="flex flex-col items-center py-3 ">
        <h2 className="text-lg text-navyblue font-josefin my-1 leading-6">
          Cantilever chair
        </h2>

        <span className="font-josefin text-base text-navyblue leading-5">
          $42.00
        </span>
      </div>
    </div>
  );
};

export default Slide;
