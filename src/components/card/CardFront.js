import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const CardFront = ({ onClick }) => {
  return (
    <div
      className="h-[500px] px-[32px] py-[24px] rounded-xl bg-white shadow-flashcard cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <p className="text-[16px] text-[#939bb4] font-semibold">Term</p>
        <div className="text-[16px] text-[#586380] font-semibold">9/22</div>
        <div className="p-2 hover:bg-[#eceff4] rounded-full transition-all linear duration-75">
          <StarIcon className="w-5 h-5 text-[#586380]"></StarIcon>
        </div>
      </div>
      <div className="h-[420px] tracking-wider text-[28px] text-[#303545] flex items-center justify-center">
        Định nghĩa
      </div>
    </div>
  );
};

export default CardFront;
