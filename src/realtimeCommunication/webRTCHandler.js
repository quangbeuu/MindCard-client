import store from "../store/configureStore";
import { setLocalStream } from "../store/video/slice";

// 1. Nhận local stream (luồng cục bộ từ thiết bị)
// để lấy quyền truy cập vào camera và micro

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  audio: true,
  video: true,
};
export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  // callbackFucntion: Nếu có quyền truy cập vào luồng cục bộ
  // ta sẽ làm j đo
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((err) => {
      console.log(err);
      console.log("Cannot get an access to local stream");
    });
};
