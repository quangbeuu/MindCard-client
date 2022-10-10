import React from "react";
import ReactDOM from "react-dom";

const Modal = ({
  title = "Create a new class",
  showModal = false,
  handleClose = () => {},
  children,
}) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`fixed w-full h-full z-40 flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
          showModal ? "" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute w-full h-full bg-[rgba(0,0,0,0.25)] z-40"
          onClick={handleClose}
        ></div>
        <div className="max-w-[600px] w-full absolute bg-white z-50">
          <div className="bg-[#4b8063] p-8 w-full flex justify-between items-center">
            <h1 className="text-[30px] font-bold text-white">{title}</h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/s
              vg"
                className="cursor-pointer hover:text-[white] transition linear duration-200 h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="p-8 overflow-y-scroll">{children}</div>
        </div>
      </div>
    </>,
    document.querySelector("#root")
  );
};

export default Modal;
