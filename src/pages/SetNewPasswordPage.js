import React from "react";
import keyIcon from "../assets/img/icon/icon-key.png";
import { ButtonSubmit } from "../components/button";

import Input from "../components/input/Input";
import ResetLayout from "../components/layout/ResetLayout";

const SetNewPasswordPage = () => {
  return (
    <ResetLayout
      icon={keyIcon}
      header="Set new password"
      subHeader="Your new password must be different to previously used passwords."
    >
      <form className="mt-[20px]">
        <Input
          id="password"
          placeholder="Enter your new password"
          text="Password"
        ></Input>
        <Input
          id="confirmPassword"
          placeholder="Confirm your new password"
          text="Confirm Password"
        ></Input>
        <ButtonSubmit className="mt-4">Reset password</ButtonSubmit>
      </form>
    </ResetLayout>
  );
};

export default SetNewPasswordPage;
