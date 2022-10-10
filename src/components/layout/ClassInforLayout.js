import React from "react";

const ClassInforLayout = ({
  hostName,
  hostEmail,
  hostAvatar,
  setNum,
  memberNum,
  forlderNum,
}) => {
  return (
    <div className="flex flex-col pl-4">
      <div>
        <p className="uppercase pt-10 text-[14px] tracking-[1px] font-semibold">
          Invitation link
        </p>
        <div>
          <input
            type="text"
            className="border-[2px] border-black rounded-md px-[12px] py-[6px]"
          />
          <button
            type="submit"
            className="mt-[8px] text-[16px] text-white font-medium ml-[18px] px-[18px] py-[8px] bg-[#9ecbab] rounded-[0.25rem] transition duration-100ms ease-in"
          >
            Copy
          </button>
        </div>
      </div>
      <div>
        <p className="uppercase pt-5 text-[14px] tracking-[1px] font-semibold">
          Created By
        </p>
        <div className="flex items-center w-full border-b-[1px] border-[#EDEFF4] px-[20px] py-[15px]">
          <img
            src={hostAvatar}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
          <div className="ml-[10px] max-w-[120px] text-[12px]">
            <p className="font-semibold">{hostName}</p>
            <p className="font-normal">{hostEmail}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase pt-5 text-[14px] tracking-[1px] font-semibold">
          Class Details
        </p>
        <ul>
          <li className="flex mt-2 items-center">
            <div className="mr-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#d9dde8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <p className="font-semibold text-[14px]">{`${setNum} sets`}</p>
          </li>
          <li className="flex mt-2 items-center">
            <div className="mr-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#d9dde8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="font-semibold text-[14px]">{`${memberNum} members`}</p>
          </li>
          <li className="flex mt-2 items-center">
            <div className="mr-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#d9dde8]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>
            <p className="font-semibold text-[14px]">{`${forlderNum} folders`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClassInforLayout;
