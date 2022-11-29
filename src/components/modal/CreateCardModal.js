import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { ButtonModal } from "../button";
import { InputModal } from "../input";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import axios from "axios";
import slugify from "react-slugify";
import {
  setMessage,
  setShowAlert,
  setType,
} from "../../store/alert/alertSlice";
import { createCard } from "../../realtimeCommunication/socketConnection";
import useAuthStateChanged from "../../hooks/useAuthStateChanged";
import { useParams } from "react-router-dom";
import useGetImageUrl from "../../hooks/useGetImageUrl";

const CreateCardModal = ({ closeModel }) => {
  const { setId } = useParams();
  // console.log(setId);
  const schema = yup.object({
    term: yup.string().required("Please enter your term."),
  });
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    //mode: onChange để sử dụng đc thằng isValid (ko nó sẽ mãi mãi là false)
  });

  const dispatch = useDispatch();
  const { user } = useAuthStateChanged();
  const { imageCover, getImageUrl, setImageCover } = useGetImageUrl();

  const fileRef = useRef(null);
  const onSubmitHandler = async (values) => {
    if (isValid) {
      const searchWord = values.term;
      console.log(fileRef.current.value);
      try {
        const getDefinitonCard = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`,
          {
            withCredentials: false,
            // Để false thì ta ms gọi dc API tránh khỏi thằng CORS
          }
        );

        // console.log(getDefinitonCard.data);
        const { word, phonetic, meanings, phonetics } =
          getDefinitonCard.data[0];

        // Lọc ra các thằng phonetics có audio
        let audio = phonetics.filter((phonetic) => phonetic.audio);

        if (audio && audio.length > 0) {
          audio = audio.find((audio) => audio.audio).audio;
        } else {
          audio = "";
        }

        const meanArr = meanings.map((mean) => {
          let meanObj = {};
          meanObj["partOfSpeech"] = mean.partOfSpeech;
          meanObj["definitions"] = mean.definitions;

          return meanObj;
        });

        const cardData = {
          word: searchWord,
          meaningUsers: values.definition,
          meanings: meanArr,
          synonyms: meanings.synonyms || [],
          antonyms: meanings.antonyms || [],
          pronounce: phonetic || "",
          audio: audio || "",
          slug: slugify(word),
          createdBy: user.id,
          setId: setId,
          images: imageCover,
        };

        // console.log(cardData);
        // try {
        //   const card = await axios.post(
        //     `${domain}/api/v1/cards`,
        //     cardData
        //   );

        //   console.log(card);

        // } catch (err) {
        //   console.log(err);
        //   dispatch(setShowAlert(true));
        //   dispatch(setMessage("Something wrong."));
        //   dispatch(setType("error"));
        // }

        if (imageCover) {
          createCard({ cardData, setId });
          // reset form
          reset();
          fileRef.current.value = null;
          const resetFile = setImageCover;
          resetFile(null);
          // Cách truyền setState vào component khác
          const close = closeModel;
          close();
        }
      } catch (err) {
        console.log(err);
        dispatch(setShowAlert(true));
        dispatch(setMessage("Something wrong."));
        dispatch(setType("error"));
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputModal
        id="term"
        placeHolder="Add a term..."
        text="Term"
        control={control}
      ></InputModal>
      <p className="text-red-400 font-semibold mb-[10px]">
        {errors.term?.message}
      </p>
      <InputModal
        id="definition"
        placeHolder="Add a definition..."
        text="definition"
        control={control}
      ></InputModal>
      <p className="text-red-400 font-semibold mb-[10px]">
        {errors.definition?.message}
      </p>
      <input
        type="file"
        id="coverImage"
        className="mt-[10px] file:bg-[#8fb397] file:hover:bg-[#4b8063] file:border-none file:outline-none file:text-white file:px-[18px] file:py-[8px] file:rounded-full"
        onChange={getImageUrl}
        ref={fileRef}
      />
      <label className="block text-[14px] font-semibold text-[#939bb4] uppercase tracking-[1px] mt-[10px] mb-[18px]">
        Upload your class cover image.
      </label>
      <ButtonModal>
        {isSubmitting === 0 ? (
          <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin mx-auto"></div>
        ) : (
          "Create a card"
        )}
      </ButtonModal>
    </form>
  );
};

export default CreateCardModal;
