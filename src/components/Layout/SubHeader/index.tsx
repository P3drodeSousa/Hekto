import LayoutComponent from "..";
import InfosComponent from "./InfosComponent";
import UserComponent from "./UserComponent";

type Props = {};

// FIXME Reponsive align items

const SubHeaderComponent = (props: Props) => {
  return (
    <LayoutComponent>
      <header className="w-full  bg-purple h-auto text-white full-bleed-header py-3 ">
        <div className="h-full flex justify-between flex-wrap items-center font-semibold ">
          <InfosComponent />
          <UserComponent />
        </div>
      </header>
    </LayoutComponent>
  );
};

export default SubHeaderComponent;
