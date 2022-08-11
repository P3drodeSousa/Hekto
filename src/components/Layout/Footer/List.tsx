type Props = {
  title: string;
  items: string[];
};

const List = ({ title, items }: Props) => {
  return (
    <div className="flex-1">
      <h3 className="mb-11 font-josefin text-2xl text-black leading-7 font-semibold">
        {title}
      </h3>
      {items?.map((item) => {
        return <p className="leading-5 text-base mb-5">{item}</p>;
      })}
    </div>
  );
};

export default List;
