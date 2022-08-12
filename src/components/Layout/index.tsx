import HeaderComponent from "./Header";
import SubHeaderComponent from "./SubHeader";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const LayoutComponent = ({ children }: Props) => {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 lg:p-0">
      {children}
    </section>
  );
};

export default LayoutComponent;
