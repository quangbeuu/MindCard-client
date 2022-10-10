import React from "react";

import flashcardIcon from "../../../assets/img/icon/flashcards.png";
import learnIcon from "../../../assets/img/icon/learn.png";

const CardLeft = () => {
  return (
    <div className="max-w-[30%] w-full p-[40px] bg-white rounded-xl h-screen">
      <h1 className="text-[28px] max-w-[90%] w-full font-bold tracking-[1px] leading-8">
        Set name
      </h1>
      <div className="mt-[20px] flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#ffcd1f]"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <p className="ml-[10px] text-[16px] text-[#586380] font-semibold">
          Leave the first rating
        </p>
      </div>
      <div className="mt-[20px]">
        <div className="p-[20px] hover:bg-red-400 rounded-xl cursor-pointer flex items-center">
          <div>
            <img src={flashcardIcon} alt="flashcard" className="w-6 h-6" />
          </div>
          <h1 className="ml-[10px] font-semibold text-[16px]">Flashcards</h1>
        </div>
        <div className="p-[20px] hover:bg-red-400 rounded-xl cursor-pointer flex items-center">
          <div>
            <img src={learnIcon} alt="learn" className="w-6 h-6" />
          </div>
          <h1 className="ml-[10px] font-semibold text-[16px]">Learn</h1>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
