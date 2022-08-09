import LayoutComponent from "../../Layout";
import Title from "../../utils/Title";
import CategoriesSlider from "./Slider";

type Props = {};

const TopCategories = (props: Props) => {
  return (
    <LayoutComponent>
      <Title title="Top Categories" />
      <CategoriesSlider />
    </LayoutComponent>
  );
};

export default TopCategories;
