import React from "react";
import SubCard from "../../card/SubCard";

const NotStudied = () => {
  return (
    <>
      <div className="mt-[28px] text-red-400 text-[18px] font-bold">
        Still learning (2)
      </div>
      <p className="text-[16px] font-normal mt-[8px]">
        You haven't studied these terms yet.
      </p>
      <div className="mt-[20px] grid gap-y-[10px]">
        <SubCard></SubCard>
        <SubCard></SubCard>
      </div>
    </>
  );
};

export default NotStudied;
