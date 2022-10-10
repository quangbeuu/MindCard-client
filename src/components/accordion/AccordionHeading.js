import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AccordionHeading = ({ show }) => {
  return (
    <div className="mt-[20px] bg-white p-[20px] w-full rounded-xl flex items-center justify-between">
      <div className="flex items-center">
        <span className="w-14 h-14 bg-yellow-200 font-semibold rounded-full flex items-center justify-center text-[24px]">
          N
        </span>
        <div className="ml-[20px] font-semibold text-[18px]">
          Noun - Function
        </div>
      </div>
      <div className="cursor-pointer hover:bg-[#eceff4] p-2 rounded-full">
        {show ? (
          <ChevronUpIcon className="w-7 h-7 text-[#de6174]"></ChevronUpIcon>
        ) : (
          <ChevronDownIcon className="w-7 h-7 text-[#de6174]"></ChevronDownIcon>
        )}
      </div>
    </div>
  );
};

export default AccordionHeading;
