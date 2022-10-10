import React from "react";
import ResetLayout from "../components/layout/ResetLayout";
import emailIcon from "../assets/img/icon/icon-mail.png";
import { ButtonSubmit } from "../components/button";

const CheckMailPage = () => {
  return (
    <ResetLayout
      icon={emailIcon}
      header="Check your email"
      subHeader="We sent a password reset link to your email."
    >
      <form className="mt-[20px]">
        <ButtonSubmit className="mt-4">
          <a href="https://mail.google.com">Open email app</a>
        </ButtonSubmit>
      </form>
    </ResetLayout>
  );
};

export default CheckMailPage;
