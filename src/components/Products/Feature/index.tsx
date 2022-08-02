import LayoutComponent from "../../Layout";
import Title from "../../utils/Title";
import FeaturedSlider from "./Slider";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <LayoutComponent>
      <Title title="Featured Products" />
      <FeaturedSlider />
    </LayoutComponent>
  );
};

export default FeaturedProducts;
