import React from "react";

const CreatedBy = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="p-[32px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1648371477306-42e7c73b3aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="avatar"
          className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
        />
        <div className="ml-[10px] max-w-[120px] text-[12px]">
          <p className="text-[12px] font-normal text-[#939bb4]">Created By</p>
          <p className="font-semibold text-[14px] text-[#303545]">
            Quangvu9501
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[38px] h-[38px] bg-white hover:bg-[#edeff4] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="w-[38px] h-[38px] bg-white hover:bg-[#edeff4] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="w-[38px] h-[38px] bg-white hover:bg-[#edeff4] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CreatedBy;
