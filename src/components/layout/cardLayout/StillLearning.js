import React from "react";
import SubCard from "../../card/SubCard";

const StillLearning = () => {
  return (
    <>
      <div className="mt-[28px] text-[#f08700] text-[18px] font-bold">
        Still learning (32)
      </div>
      <p className="text-[16px] font-normal mt-[8px]">
        You've begun learning these terms. Keep up the good work!
      </p>
      <div className="mt-[20px] grid gap-y-[10px]">
        <SubCard></SubCard>
        <SubCard></SubCard>
        <SubCard></SubCard>
        <SubCard></SubCard>
        <SubCard></SubCard>
        <SubCard></SubCard>
        <SubCard></SubCard>
      </div>
    </>
  );
};

export default StillLearning;
