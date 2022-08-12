import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import UserFormContainer from "../../components/User/Container";
import LostPasswordForm from "../../components/User/Form/LostPassword";

type Props = {};

const LostPasswordPage = (props: Props) => {
  return (
    <PageLayout title="Forgot Password">
      <section className="grid place-items-center">
        <UserFormContainer
          title="Forgot Password ?"
          text="Enter the email address you used when you joined abd we'll send you instruction to reset your password. "
        >
          <LostPasswordForm />
        </UserFormContainer>
      </section>
    </PageLayout>
  );
};

export default LostPasswordPage;
