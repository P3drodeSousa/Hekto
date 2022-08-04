import LayoutComponent from "../Layout";
import Button from "../utils/Button";
import trending from "../../assets/trending/sofa.png";

type Props = {};

const Trending = (props: Props) => {
  return (
    <LayoutComponent>
      <div className="trending w-full bg-trending flex items-center justify-center full-bleed gap-20">
        <div className="trending-sofa">
          <img src={trending} alt="trending" />
        </div>
        <div>
          <h2 className="font-josefin text-4xl font-bold text-navyblue mb-12">
            Unique Features Of leatest & Trending Poducts
          </h2>
          <p className="trending-paragraph">
            All frames constructed with hardwood solids and laminates
          </p>
          <p className="trending-paragraph">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
          <p className="trending-paragraph">
            Arms, backs and seats are structurally reinforced
          </p>
          <div className="flex mt-12 items-center">
            <Button text="Add To Cart" />
            <div className="ml-6 text-navyblue text-sm">
              <p className="font-semibold">B&B Italian Sofa</p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Trending;
