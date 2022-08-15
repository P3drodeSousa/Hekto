import { useLocation } from "react-router-dom";
import LayoutComponent from "..";

type Props = { children?: JSX.Element | JSX.Element[]; title: string };

const PageLayout = ({ title, children }: Props) => {
  const location = useLocation();

  const formatPath = () => {
    const path = location.pathname;
    const pathArr = path.split("/");
    return console.log(pathArr);
  };

  console.log(formatPath());

  return (
    <LayoutComponent>
      <div className="h-72 bg-pageBanner flex flex-col justify-center full-bleed-login">
        <h2 className="font-josefin text-4xl leading-10 font-bold text-pageBannerTitle">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </LayoutComponent>
  );
};

export default PageLayout;
