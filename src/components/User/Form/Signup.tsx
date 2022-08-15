import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Submit from "./Fields/Submit";
import { TextInputContainer } from "./Fields/Text/InputContainer";

import { signUpValidationSchema } from "./utils/validationSchemas";

type Props = {};

const SignupForm = (props: Props) => {
  const resolver = yupResolver(signUpValidationSchema);
  const methods = useForm({ resolver });

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
          name="password"
          placeholder="password"
          type="password"
        />

        <Submit title="Sign Up" />
      </form>
    </FormProvider>
  );
};

export default SignupForm;
