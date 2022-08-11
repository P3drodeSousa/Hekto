import React from "react";

type Props = {
  text: String;
};

const Button = ({ text }: Props) => {
  return (
    <button className="bg-pink text-white rounded-sm font-josefin text-lg py-3 px-10">
      {text}
    </button>
  );
};

export default Button;
