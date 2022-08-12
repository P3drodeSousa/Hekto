import { useFormContext } from "react-hook-form";
import Input from "./Input";

interface ReactHookFormTextFieldContainerProps {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
}

export const TextInputContainer = ({
  label,
  name,
  placeholder,
  type,
}: ReactHookFormTextFieldContainerProps) => {
  const methods = useFormContext();

  return (
    <Input
      methods={methods}
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
};
