import LayoutComponent from "../../Layout";
import Title from "../../utils/Title";
import FeaturedTabs from "./FeaturedTabs";
import ProductList from "./ProductList";

type Props = {};

const LatestProducts = (props: Props) => {
  return (
    <LayoutComponent>
      <Title title="Latest Products" />
      <FeaturedTabs />
      <ProductList />
    </LayoutComponent>
  );
};

export default LatestProducts;
