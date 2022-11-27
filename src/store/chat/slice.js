import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "chat",
  initialState: {
    chosenChatDetails: {},
    chatType: "",
    messages: [],
  },
  reducers: {
    setChosenChatDetails: (state, action) => ({
      ...state,
      chosenChatDetails: action.payload,
    }),
    setChatType: (state, action) => ({
      ...state,
      chatType: action.payload,
    }),
    setMessages: (state, action) => ({
      ...state,
      messages: action.payload,
    }),
  },
});

export const { setChosenChatDetails, setChatType, setMessages } =
  cardSlice.actions;

export default cardSlice.reducer;
