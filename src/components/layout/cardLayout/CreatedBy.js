import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useSelector } from "react-redux";
const CreatedBy = () => {
  const { setInfo } = useSelector((state) => state.set);

  return (
    <div className="flex items-center justify-between">
      <div className="p-[32px] flex items-center">
        <img
          src={setInfo?.createdBy?.avatarUrl}
          alt="avatar"
          className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
        />
        <div className="ml-[10px] max-w-[120px] text-[12px]">
          <p className="text-[12px] font-normal text-[#939bb4]">Created By</p>
          <p className="font-semibold text-[14px] text-[#303545]">
            {setInfo?.createdBy?.name}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[38px] h-[38px] bg-white hover:bg-[#edeff4] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
          <AddRoundedIcon className="text-[40px]" />
        </div>
        <div className="w-[38px] h-[38px] bg-white hover:bg-[#edeff4] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
          <FolderOpenOutlinedIcon className="text-[40px]" />
        </div>
        <div className="w-[38px] h-[38px] bg-white hover:bg-[#edeff4] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
          <MoreHorizOutlinedIcon className="text-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default CreatedBy;
