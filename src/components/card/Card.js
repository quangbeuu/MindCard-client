import React from "react";
import ReactCardFlip from "react-card-flip";
import useToggleValue from "../../hooks/useToggleValue";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = () => {
  const { value: isFlipped, handleToggleValue: handleFlipped } =
    useToggleValue();

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <CardFront onClick={handleFlipped}></CardFront>
      <CardBack onClick={handleFlipped}></CardBack>
    </ReactCardFlip>
  );
};

export default Card;
