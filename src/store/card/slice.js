import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardList: [],
    cardListReal: [],
    cardStudied: [],
    cardNoStudied: [],
    setId: "",
    loading: true,
    errorMessage: "",
  },
  reducers: {
    setCardList: (state, action) => ({
      ...state,
      cardList: action.payload,
    }),
    setCardListReal: (state, action) => ({
      ...state,
      cardListReal: action.payload,
    }),
    setCardStudied: (state, action) => ({
      ...state,
      cardStudied: action.payload,
    }),
    setNoCardStudied: (state, action) => ({
      ...state,
      cardNoStudied: action.payload,
    }),
    getCardList: (state, action) => {},
    setSetId: (state, action) => ({
      ...state,
      setId: action.payload,
    }),
  },
});

export const {
  setCardList,
  getCardList,
  setSetId,
  setCardListReal,
  setCardStudied,
  setNoCardStudied,
} = cardSlice.actions;

export default cardSlice.reducer;
