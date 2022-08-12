import LayoutComponent from "../../Layout";
import ProductTitle from "../../utils/ProductTitle";
import Title from "../../utils/Title";
import Box from "./Box";
import TrendingShowcase from "./Showcase";

type Props = {};

function TrendingProducts({}: Props) {
  return (
    <div className="mt-32">
      <LayoutComponent>
        <Title title="Trending Products" />

        <TrendingShowcase />

        <div className="trending-showcase ">
          <Box color="trendingShowcaseBox" />
          <Box color="featuredCard" />

          <div className=" flex-1 flex flex-col gap-5">
            <div className="flex-1 flex gap-3">
              <div className="bg-trendingshowcase w-28 grid place-items-center">
                Image
              </div>
              <div className="flex flex-col justify-center">
                <ProductTitle title="Executive Seat Chair" />
                <span className="text-navyblue line-through text-xs font-semibold">
                  $32.00
                </span>
              </div>
            </div>

            <div className="flex-1 flex gap-3">
              <div className="bg-trendingshowcase w-28 grid place-items-center">
                Image
              </div>
              <div className="flex flex-col justify-center">
                <ProductTitle title="Executive Seat Chair" />
                <span className="text-navyblue line-through text-xs font-semibold">
                  $32.00
                </span>
              </div>
            </div>

            <div className="flex-1 flex gap-3">
              <div className="bg-trendingshowcase w-28 grid place-items-center">
                Image
              </div>
              <div className="flex flex-col justify-center">
                <ProductTitle title="Executive Seat Chair" />
                <span className="text-navyblue line-through text-xs font-semibold">
                  $32.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </div>
  );
}

export default TrendingProducts;
