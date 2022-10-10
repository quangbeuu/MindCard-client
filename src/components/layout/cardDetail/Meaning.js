import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
const Meaning = () => {
  return (
    <div className="p-2 w-full flex">
      <div className="w-[10%]">
        <BookOpenIcon className="w-5 h-5 text-[#586380]"></BookOpenIcon>
      </div>
      <div>
        <div className="text-[15px] font-semibold text-justify text-[#303545]">
          A reference work with a list of words from one or more languages,
          normally ordered alphabetically, explaining each word's meaning, and
          sometimes containing information on its etymology, pronunciation,
          usage, translations, and other data.
        </div>
        <div className="flex items-center mt-[20px]">
          <p className="text-[#939bb4] italic text-[16px] mr-[10px]">Example</p>
          <p className="text-[16px]">This is an example</p>
        </div>
        <div className="flex items-center mt-[8px]">
          <p className="text-[#90b498] italic text-[16px] mr-[10px]">
            Synonyms
          </p>
          <p className="text-[16px]">Example</p>
        </div>
        <div className="flex items-center mt-[8px]">
          <p className="text-[#ff715b] italic text-[16px] mr-[10px]">
            Antonyms
          </p>
          <p className="text-[16px]">Example</p>
        </div>
      </div>
    </div>
  );
};

export default Meaning;
