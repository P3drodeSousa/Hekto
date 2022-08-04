import React from "react";

type Props = {
  price: string;
};

const Price = ({ price }: Props) => {
  return (
    <p className="font-josefin text-sm leading-4 text-navyblue">{price}</p>
  );
};

export default Price;
