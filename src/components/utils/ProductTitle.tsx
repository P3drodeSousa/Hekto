import React from "react";

type Props = {
  title: String;
};

const ProductTitle = ({ title }: Props) => {
  return (
    <h3 className="text-navyblue font-bold text-base leading-7 font-lato">
      {title}
    </h3>
  );
};

export default ProductTitle;
