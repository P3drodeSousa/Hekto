import { useForm, SubmitHandler } from "react-hook-form";
import Submit from "./Fields/Submit";

type Inputs = {
  email: string;
};

const LostPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mb-6 text-base">
        <input
          {...register("email", { required: true })}
          className="w-full  pt-6 pb-4 px-4 placeholder-transparent text-black  border-2 border-formborder peer focus:outline-pink focus:text-black rounded-sm"
          placeholder="email"
        />
        <label
          htmlFor="email"
          className="absolute left-3.5 top-1 text-pageFormPar text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-pink peer-focus:text-sm"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-red text-sm">This field is required</span>
        )}
      </div>

      <Submit title="Reset Password" />
    </form>
  );
};

export default LostPasswordForm;
