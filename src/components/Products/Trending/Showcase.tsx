type Props = {};
import chair from "../../../assets/trendingProducts/cair.png";
import Price from "../../utils/Price";
import ProductTitle from "../../utils/ProductTitle";
import Reduction from "../../utils/Reduction";

const TrendingShowcase = (props: Props) => {
  return (
    <div className="trending-showcase mt-10">
      <div className="trending-showcase-container flex flex-col items-center px-2 pt-2">
        <div className="trending-showcase-image flex-1 w-full bg-trendingshowcase grid place-content-center">
          <img src={chair} alt="" />
        </div>
        <div className="w-full pt-4 pb-6 flex-3 flex flex-col items-center gap-3">
          <ProductTitle title="Cantelever chair" />
          <div className="flex items-center gap-2">
            <Price price="$26.00" />
            <Reduction text="$42.00" />
          </div>
        </div>
      </div>

      <div className="trending-showcase-container flex flex-col items-center px-2 pt-2">
        <div className="trending-showcase-image flex-1 w-full bg-trendingshowcase grid place-content-center">
          <img src={chair} alt="" />
        </div>
        <div className="w-full pt-4 pb-6 flex-3 flex flex-col items-center gap-3">
          <ProductTitle title="Cantelever chair" />
          <div className="flex items-center gap-2">
            <Price price="$26.00" />
            <Reduction text="$42.00" />
          </div>
        </div>
      </div>

      <div className="trending-showcase-container flex flex-col items-center px-2 pt-2">
        <div className="trending-showcase-image flex-1 w-full bg-trendingshowcase grid place-content-center">
          <img src={chair} alt="" />
        </div>
        <div className="w-full pt-4 pb-6 flex-3 flex flex-col items-center gap-3">
          <ProductTitle title="Cantelever chair" />
          <div className="flex items-center gap-2">
            <Price price="$26.00" />
            <Reduction text="$42.00" />
          </div>
        </div>
      </div>

      <div className="trending-showcase-container flex flex-col items-center px-2 pt-2">
        <div className="trending-showcase-image flex-1 w-full bg-trendingshowcase grid place-content-center">
          <img src={chair} alt="" />
        </div>
        <div className="w-full pt-4 pb-6 flex-3 flex flex-col items-center gap-3">
          <ProductTitle title="Cantelever chair" />
          <div className="flex items-center gap-2">
            <Price price="$26.00" />
            <Reduction text="$42.00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingShowcase;
