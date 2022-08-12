import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import Submit from "./Fields/Submit";
import { TextInputContainer } from "./Fields/Text/InputContainer";

type Props = {};

const SignupForm = (props: Props) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInputContainer
          label="Email address"
          name="email"
          placeholder="Email address"
          type="email"
        />
        <TextInputContainer
          label="Your name"
          name="name"
          placeholder="Your Name"
          type="text"
        />
        <TextInputContainer
          label="Password"
          name="Password"
          placeholder="password"
          type="password"
        />

        <Submit title="Sign Up" />
      </form>
    </FormProvider>
  );
};

export default SignupForm;
