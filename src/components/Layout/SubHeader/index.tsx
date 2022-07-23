import InfosComponent from "./InfosComponent";
import UserComponent from "./UserComponent";

type Props = {};

const SubHeaderComponent = (props: Props) => {
  return (
    <header className="w-full  bg-purple h-11 text-white ">
      <div className="h-full flex justify-between items-center font-semibold">
        <InfosComponent />
        <UserComponent />
      </div>
    </header>
  );
};

export default SubHeaderComponent;
