import React from "react";

type Props = {
  text: string;
};

const Reduction = ({ text }: Props) => {
  return (
    <p className="font-josefin line-through text-xs text-trendingParagraph">
      {text}
    </p>
  );
};

export default Reduction;
