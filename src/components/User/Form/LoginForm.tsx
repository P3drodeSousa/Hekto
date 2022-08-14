import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import Submit from "./Fields/Submit";
import { TextInputContainer } from "./Fields/Text/InputContainer";
import { useYupValidationResolver } from "./utils/useYupValidationresolver";
import { signInValidationSchema } from "./utils/validationSchemas";

type FormValues = {
  email: string;
  password: string;
};

type Props = {};

const LoginForm = (props: Props) => {
  const resolver = useYupValidationResolver(signInValidationSchema);
  const methods = useForm<FormValues>({ resolver, mode: "onBlur" });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
          label="Password"
          name="password"
          placeholder="password"
          type="password"
        />
        <div className=" mt-3 mb-6 text-left">
          <Link
            to="/lost_password"
            className="text-pageFormPar text-base leading-5 font-lato"
          >
            Forgot your password ?
          </Link>
        </div>

        <Submit title="Sign In" />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
