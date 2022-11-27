import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ButtonModal } from "../button";
import SetOption from "./SetOption";

const SetModal = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const sets = await axios.post("http://localhost:3000/api/v1/sets", {
        name: "Test Set",
      });

      const setId = sets.data.data.sets._id;

      navigate(`/createSet/${setId}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ButtonModal onClick={handleClick}>Create a new set</ButtonModal>
      <div>
        <h1 className="font-semibold text-[18px] mt-[18px]">Your sets</h1>
      </div>
      <div className="mt-[18px] max-h-[300px]">
        <div className="p-2">
          <SetOption></SetOption>
          <SetOption></SetOption>
        </div>
      </div>
    </div>
  );
};

export default SetModal;
