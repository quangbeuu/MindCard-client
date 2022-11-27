import { createSlice } from "@reduxjs/toolkit";
const showSlice = createSlice({
  name: "show",
  initialState: {
    showTestModel: false,
    showReview: false,
    showCardBox: false,
    showInvitationBox: false,
    showMessageListBox: false,
  },
  reducers: {
    setShowTestModel: (state, action) => ({
      ...state,
      showTestModel: action.payload,
    }),
    setShowReview: (state, action) => ({
      ...state,
      showReview: action.payload,
    }),
    setShowCardBox: (state, action) => ({
      ...state,
      showCardBox: action.payload,
    }),
    setShowInvitationBox: (state, action) => ({
      ...state,
      showInvitationBox: action.payload,
    }),
    setShowMessageListBox: (state, action) => ({
      ...state,
      showMessageListBox: action.payload,
    }),
  },
});

export const {
  setShowTestModel,
  setShowReview,
  setShowCardBox,
  setShowInvitationBox,
  setShowMessageListBox,
} = showSlice.actions;

export default showSlice.reducer;
