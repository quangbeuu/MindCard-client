import { setMessages } from "../store/chat/slice";
import { store } from "../store/configureStore";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  //   console.log({ participants, messages });
  // 1. Tìm Id ng dùng dựa vào token và Id ng dùng từ active conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userid = store.getState().auth.user?._id;

  if (receiverId && userid) {
    const usersInConversation = [receiverId, userid];
    // console.log(usersInConversation);

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  messages,
}) => {
  // Kiểm tra xem ng dùng có đang trò chuyện hay k
  const result = participants.every((participantId) => {
    return usersInConversation.includes(participantId);
  });
  if (result) {
    store.dispatch(setMessages(messages));
  }
};
