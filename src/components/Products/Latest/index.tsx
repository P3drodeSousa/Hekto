import LayoutComponent from "../../Layout";
import Title from "../../utils/Title";
import FeaturedTabs from "./FeaturedTabs";

type Props = {};

const LatestProducts = (props: Props) => {
  return (
    <LayoutComponent>
      <Title title="Latest Products" />
      <FeaturedTabs />
    </LayoutComponent>
  );
};

export default LatestProducts;
