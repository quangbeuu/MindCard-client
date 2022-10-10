import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonSubmit, SmallButton } from "../components/button";
import Header from "../components/common/Header";
import { InputModal } from "../components/input";
import { CreateCardModal, Modal } from "../components/modal";
import CardDemo from "../item/CardDemo";

const CreateSetPage = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(),
    mode: "onChange",
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });

  const handleShowModel = () => {
    setShowModal(true);
  };
  return (
    <div className="bg-[#f6f7fb]">
      <Header></Header>
      <div className="p-[64px]">
        <div className="mt-10 flex justify-between">
          <h1 className="text-[28px] font-bold tracking-[1px]">
            Create a new set
          </h1>
          <SmallButton className={"bg-[#8fb397] hover:bg-[#4b8063] text-white"}>
            Create
          </SmallButton>
        </div>
        <div className="grid items-center grid-cols-2">
          <div className="max-w-[600px] w-full mt-[48px]">
            <InputModal
              id="setname"
              placeHolder="Enter a title, like “Biology - Chapter 22: Evolution”"
              text="Title"
              control={control}
            ></InputModal>
            <p className="text-red-400 font-semibold mb-[10px]">
              {errors.classname?.message}
            </p>
            <InputModal
              id="description"
              placeHolder="Add a description..."
              text="Description"
              control={control}
            ></InputModal>
          </div>

          <div>
            <input
              type="file"
              id="coverImage"
              className="mt-[10px] file:bg-[#8fb397] file:hover:bg-[#4b8063] file:border-none file:outline-none file:text-white file:px-[18px] file:py-[8px] file:rounded-full"
              // onChange={getImageUrl}
            />
            <label className="block text-[14px] font-semibold text-[#939bb4] uppercase tracking-[1px] mt-[10px] mb-[18px]">
              Upload your class cover image.
            </label>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <h1 className="text-[28px] font-bold tracking-[1px]">
            Create Flashcards
          </h1>
        </div>
        <div className="mt-[20px] grid gap-y-[10px]">
          <ButtonSubmit
            className="bg-[#8fb397] hover:bg-[#4b8063] text-white"
            onClick={handleShowModel}
          >
            Create card
          </ButtonSubmit>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
          <CardDemo></CardDemo>
        </div>
      </div>
      <Modal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        title="Create a Flashcard"
      >
        <CreateCardModal></CreateCardModal>
      </Modal>
    </div>
  );
};

export default CreateSetPage;
