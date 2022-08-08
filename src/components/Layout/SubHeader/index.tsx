import LayoutComponent from "..";
import InfosComponent from "./InfosComponent";
import UserComponent from "./UserComponent";

type Props = {};

// FIXME Reponsive align items

const SubHeaderComponent = (props: Props) => {
  return (
    <LayoutComponent>
      <header className="w-full  bg-purple h-11 text-white full-bleed-header ">
        <div className="h-full flex flex-col md:flex-row justify-between items-center font-semibold">
          <InfosComponent />
          <UserComponent />
        </div>
      </header>
    </LayoutComponent>
  );
};

export default SubHeaderComponent;
