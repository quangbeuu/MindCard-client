import React from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const CardBack = ({ onClick }) => {
  return (
    <div
      className="h-[500px] rounded-xl bg-white shadow-flashcard flex cursor-pointer"
      onClick={onClick}
    >
      <div className="px-[32px] py-[24px] max-w-[50%] w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-[16px] text-[#939bb4] font-semibold">
              Definition
            </p>
            <div className="ml-[4px] hover:bg-[#eceff4] rounded-full p-2">
              <SpeakerWaveIcon className="w-5 h-5 text-[#586380]"></SpeakerWaveIcon>
            </div>
          </div>
          <div className="hover:bg-[#eceff4] rounded-full p-2">
            <InformationCircleIcon className="w-5 h-5 text-[#586380]"></InformationCircleIcon>
          </div>
        </div>
        <div className="h-[420px] flex flex-col items-center justify-center">
          <div className="leading-8 text-[28px] text-[#303545]">Definiton</div>
          <div className="text-[#bebebe]">/ˌjuː.nɪˈvɜː.sə.ti/</div>
          <div className="font-semibold text-[#8eb397]">adj</div>
        </div>
      </div>
      <div className="max-w-[50%] w-full">
        <img
          src="https://images.unsplash.com/photo-1657299142312-5e12a754ff0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80"
          alt="img-word"
          className="h-full w-full object-cover rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default CardBack;
