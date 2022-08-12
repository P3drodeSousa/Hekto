import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import Submit from "./Fields/Submit";
import { TextInputContainer } from "./Fields/Text/InputContainer";

type Props = {};

const LoginForm = (props: Props) => {
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
          label="Password"
          name="Password"
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
