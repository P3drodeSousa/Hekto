import { Link } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import UserFormContainer from "../../components/User/Container";
import LoginForm from "../../components/User/Form/LoginForm";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <PageLayout title="My Account">
      <section className="grid place-items-center">
        <UserFormContainer
          title="Login"
          text="Please login using account details bellow"
        >
          <LoginForm />
          <div className="text-center mt-6">
            <span className="text-pageFormPar text-base leading-5 font-lato">
              Don’t have an Account ?{" "}
              <Link
                to="/register"
                className="text-pageFormPar text-base leading-5 font-lato"
              >
                Create account
              </Link>
            </span>
          </div>
        </UserFormContainer>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
