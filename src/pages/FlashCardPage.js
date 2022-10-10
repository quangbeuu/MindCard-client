import React from "react";
import Header from "../components/common/Header";

const FlashCardPage = () => {
  return (
    <>
      <Header></Header>
      <div className="p-[64px]">
        <h1 className="text-[30px] font-bold mt-[50px]">Technology</h1>
        <div className="flex gap-[80px] items-start mt-[40px]">
          <div className="max-w-[30%]">
            <h1 class="text-[14px] font-semibold text-[#939bb4] uppercase">
              Study
            </h1>
            <div className="mt-[10px]">
              <div className="flex items-center cursor-pointer">
                <img
                  src="../assets/img/icon-flashcards.png"
                  class="w-[40px] h-[40px]"
                  alt="flash-icon"
                />
                <div class="text-[16px] font-semibold ml-[10px]">
                  Flashcards
                </div>
              </div>
              <div className="flex items-center cursor-pointer mt-[18px]">
                <img
                  src="../assets/img/icon-flashcards.png"
                  class="w-[40px] h-[40px]"
                  alt="flash-icon"
                />
                <div class="text-[16px] font-semibold ml-[10px]">
                  Flashcards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCardPage;
