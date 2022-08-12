import Button from "../utils/Button";
import BannerBkg from "../../assets/banner.png";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section>
      <div
        className="h-homeBanner flex flex-col  items-center justify-center bg-center bg-cover bg-no-repeat mb-24"
        style={{ backgroundImage: `url(${BannerBkg})` }}
      >
        <h2 className="text-center text-4xl font-josefin leading-10  text-navyblue font-bold mb-7">
          Get Leatest Update By Subscribe <br /> 0ur Newslater
        </h2>
        <Button text="Shop Now" />
      </div>
    </section>
  );
};

export default Banner;
