import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <h1 className="text-4xl text-offBlue text-center font-josefin font-bold mt-16 mb-14">
      {title}
    </h1>
  );
};

export default Title;
