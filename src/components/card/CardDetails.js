import React from "react";
import ReactDOM from "react-dom";
import Definition from "../layout/cardDetail/Definition";
import PartOfSpeech from "../layout/cardDetail/PartOfSpeech";

const CardDetails = () => {
  return ReactDOM.createPortal(
    <>
      <div className="invisible opacity-0 fixed w-full h-full z-40 visible opacity-100 transition ease-in duration-200">
        <div
          className="absolute w-full h-full bg-[rgba(0,0,0,0.25)] z-40"
          //   onClick={handleClose}
        ></div>
        <div className="absolute z-50 p-[64px] w-full h-full flex items-start overflow-y-scroll">
          <div className="w-[65%] mr-[20px]">
            <Definition></Definition>
            <PartOfSpeech></PartOfSpeech>
            <PartOfSpeech></PartOfSpeech>
            <PartOfSpeech></PartOfSpeech>
          </div>
          <div className="bg-white p-[40px] w-full w-[35%] rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
              alt="word-img"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#root")
  );
};

export default CardDetails;
