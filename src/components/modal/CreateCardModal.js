import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { ButtonModal } from "../button";
import { InputModal } from "../input";

const CreateCardModal = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(),
    mode: "onChange",
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });
  return (
    <form>
      <InputModal
        id="term"
        placeHolder="Add a term..."
        text="Term"
        control={control}
      ></InputModal>
      <p className="text-red-400 font-semibold mb-[10px]">
        {errors.classname?.message}
      </p>
      <InputModal
        id="definition"
        placeHolder="Add a definition..."
        text="definition"
        control={control}
      ></InputModal>
      <p className="text-red-400 font-semibold mb-[10px]">
        {errors.classname?.message}
      </p>
      <ButtonModal>Create a card</ButtonModal>
    </form>
  );
};

export default CreateCardModal;
