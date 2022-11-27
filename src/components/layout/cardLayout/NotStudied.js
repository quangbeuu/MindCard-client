import React from "react";
import { useSelector } from "react-redux";
import SubCard from "../../card/SubCard";

const NotStudied = () => {
  const { cardNoStudied } = useSelector((state) => state.card);

  return (
    <>
      <div className="mt-[28px] text-red-400 text-[18px] font-bold">
        Not Studied ({cardNoStudied?.length})
      </div>
      <p className="text-[16px] font-normal mt-[8px]">
        You haven't studied these terms yet.
      </p>
      <div className="mt-[20px] grid gap-y-[10px]">
        {cardNoStudied.map((subcard) => (
          <SubCard key={subcard._id} subcard={subcard}></SubCard>
        ))}
      </div>
    </>
  );
};

export default NotStudied;
