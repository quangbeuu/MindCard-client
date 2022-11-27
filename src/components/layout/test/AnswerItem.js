import React, { useEffect } from "react";
import { useController } from "react-hook-form";

const AnswerItem = ({ option, index, control, name, value }) => {
  const choice = ["A. ", "B. ", "C. ", "D. "];

  const { field } = useController({
    control,
    name: name,
  });

  const choiceItem = document.querySelectorAll(`.${name}`);
  const handleClick = (e) => {
    [...choiceItem].forEach((item) => {
      item.classList.remove("active-question");
    });

    // e.target.classList.add("active-question");
  };

  useEffect(() => {
    [...choiceItem].forEach((item) => {
      item.addEventListener("click", handleClick);
    });
    return () => {
      [...choiceItem].forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <label
      htmlFor={`${name}${index}`}
      className={`${name} border-[4px] p-[20px] rounded-xl hover:border-[#939bb4] transition-all linear cursor-pointer flex`}
    >
      <input
        type="radio"
        {...field}
        value={value}
        id={`${name}${index}`}
        className={"hidden pointer-events-none"}
      ></input>
      <label
        htmlFor={`${name}${index}`}
        className="text-[16px] pointer-events-none"
      >
        {choice[index]}
        {option}
      </label>
    </label>
  );
};

export default AnswerItem;
