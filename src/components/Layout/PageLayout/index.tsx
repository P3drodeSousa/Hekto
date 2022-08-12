import LayoutComponent from "..";

type Props = { children?: JSX.Element | JSX.Element[]; title: string };

const PageLayout = ({ title, children }: Props) => {
  return (
    <LayoutComponent>
      <div className="h-72 bg-pageBanner flex flex-col justify-center full-bleed-login">
        <h2 className="font-josefin text-4xl leading-10 font-bold text-pageBannerTitle">
          {title}
        </h2>
      </div>
      {children}
    </LayoutComponent>
  );
};

export default PageLayout;
