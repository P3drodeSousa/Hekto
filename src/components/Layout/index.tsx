import HeaderComponent from "./Header";
import SubHeaderComponent from "./SubHeader";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const LayoutComponent = ({ children }: Props) => {
  return <div className="max-w-7xl w-full mx-auto ">{children}</div>;
};

export default LayoutComponent;
