import PageLayout from "../../components/Layout/PageLayout";
import UserFormContainer from "../../components/User/Container";
import SignupForm from "../../components/User/Form/Signup";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <PageLayout title="Sign Up">
      <section className="grid place-items-center">
        <UserFormContainer title="Sign Up" text="Already have an account ? ">
          <SignupForm />
        </UserFormContainer>
      </section>
    </PageLayout>
  );
};

export default SignUpPage;
