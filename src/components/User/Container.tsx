import React, { Children } from "react";

type Props = {
  title: string;
  text: string;
  children: JSX.Element | JSX.Element[];
};

const UserFormContainer = ({ title, text, children }: Props) => {
  return (
    <div className="p-12  max-w-xl w-full my-32 user-form-shadow ">
      <h2 className="font-josefin font-bold text-3xl  text-back leading-9 text-center">
        {title}
      </h2>
      <p className="text-pageFormPar font-lato text-base leading-5 mt-2 mb-9 text-center">
        {text}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default UserFormContainer;
