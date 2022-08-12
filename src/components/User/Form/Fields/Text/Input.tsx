import React, { memo } from "react";
import { UseFormReturn } from "react-hook-form";

interface IReactHookFormTextFieldProps {
  methods: UseFormReturn;
  label: string;
  name: string;
  placeholder?: string;
  type: string;
}

const Input = memo(
  ({
    methods,
    label,
    name,
    placeholder,
    type,
  }: IReactHookFormTextFieldProps) => (
    <div className="relative mb-6 text-base">
      <input
        id={name}
        {...methods.register(name)}
        type={type}
        className="w-full  pt-6 pb-4 px-4 placeholder-transparent text-black  border-2 border-formborder peer focus:outline-pink focus:text-black rounded-sm"
        placeholder={placeholder}
      />
      <label
        htmlFor="name"
        className="absolute left-3.5 top-1 text-pageFormPar text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-pink peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.methods.formState.isDirty ===
        nextProps.methods.formState.isDirty &&
      prevProps.methods.formState.errors !== nextProps.methods.formState.errors
    );
  }
);

export default Input;
