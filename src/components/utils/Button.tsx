import React from "react";

type Props = {
  text: String;
};

const Button = ({ text }: Props) => {
  return (
    <button className="bg-pink p-2 text-white rounded-sm font-josefin text-lg py-3 px-6">
      {text}
    </button>
  );
};

export default Button;
