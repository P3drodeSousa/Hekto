import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <h1 className="text-4xl text-offBlue text-center font-josefin mt-16">
      {title}
    </h1>
  );
};

export default Title;
