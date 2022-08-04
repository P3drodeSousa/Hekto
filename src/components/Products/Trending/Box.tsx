import exp from "../../../assets/trendingProducts/exp.png";
type Props = {
  title?: string;
  color: string;
  img?: string;
};

const Box = ({ color }: Props) => {
  console.log(color);
  return (
    <div className={`flex-1 flex flex-col h-auto pt-9 pb-4 px-7 bg-${color}`}>
      <h3 className="text-navyblue text-2xl font-josefin font-bold leading-8">
        23% off in all products
      </h3>
      <span className="text-pink inline-block underline underline-offset-4 font-lato font-bold">
        Shop Now
      </span>
      <div className="self-end flex items-end">
        <img src={exp} alt="" />
      </div>
    </div>
  );
};

export default Box;
