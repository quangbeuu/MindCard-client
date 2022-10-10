import React from "react";
import { ButtonModal } from "../button";
import SetOption from "./SetOption";

const SetModal = () => {
  return (
    <div>
      <ButtonModal>Create a new set</ButtonModal>
      <div>
        <h1 className="font-semibold text-[18px] mt-[18px]">Your sets</h1>
      </div>
      <div className="mt-[18px] max-h-[300px]">
        <div className="p-2">
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
          <SetOption></SetOption>
        </div>
      </div>
    </div>
  );
};

export default SetModal;
