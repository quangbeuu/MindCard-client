import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, A11y } from "swiper";

import Header from "../components/common/Header";

import Card from "../components/card/Card";
import CreatedBy from "../components/layout/cardLayout/CreatedBy";
import CardLeft from "../components/layout/cardLayout/CardLeft";
import StillLearning from "../components/layout/cardLayout/StillLearning";
import NotStudied from "../components/layout/cardLayout/NotStudied";
import CardDetails from "../components/card/CardDetails";

const SetPage = () => {
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();
  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);
  return (
    <div>
      <Header></Header>
      <div className="pt-[64px] px-[20px] bg-[#f6f7fb]">
        <div className="mt-12 flex">
          <CardLeft></CardLeft>
          <div className="max-w-[70%] px-[20px] pb-[64px] w-full ml-[20px]">
            <div>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, A11y]}
                navigation={{
                  nextEl: ".swiper-next",
                  prevEl: ".swiper-prev",
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={setSwiper}
              >
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <div className="flex justify-end mt-[20px]">
                  <div
                    className="swiper-prev bg-white rounded-full p-[10px] cursor-pointer"
                    ref={prevRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="w-8 h-8 text-[#586380]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div
                    className="swiper-next bg-white rounded-full p-[10px] ml-[10px] cursor-pointer"
                    ref={nextRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-[#586380]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </Swiper>
            </div>
            <div className="h-[1px] bg-[#d9dde8] mt-[1rem] w-full"></div>
            <CreatedBy></CreatedBy>
            <div className="font-bold text-[#303545] text-[20px] mt-[40px]">
              Terms in this set (49)
            </div>
            <StillLearning></StillLearning>
            <NotStudied></NotStudied>
          </div>
        </div>
      </div>
      <CardDetails></CardDetails>
    </div>
  );
};

export default SetPage;
