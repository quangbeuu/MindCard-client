import React, { useState } from "react";

import Collapsible from "react-collapsible";
import AccordionHeading from "../../accordion/AccordionHeading";
import Meaning from "./Meaning";

const PartOfSpeech = () => {
  const [show, setShow] = useState(false);
  const handleOpenAccordion = () => {
    setShow(true);
  };
  const handleCloseAccordion = () => {
    setShow(false);
  };
  return (
    <>
      {/* AccordionHeading */}
      <Collapsible
        trigger={<AccordionHeading show={show}></AccordionHeading>}
        onTriggerOpening={handleOpenAccordion}
        onTriggerClosing={handleCloseAccordion}
      >
        {/* AccordionContent */}
        <div className="overflow-hidden transition-all duration-500 ease-in-out mt-[10px] bg-white p-[20px] rounded-xl">
          <Meaning></Meaning>
        </div>
      </Collapsible>
    </>
  );
};

export default PartOfSpeech;
