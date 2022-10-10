import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Header from "../components/common/Header";
import NoCourse from "../components/common/NoCourse";
import ClassDetailInfo from "../components/layout/ClassDetailInfo";
import ClassInforLayout from "../components/layout/ClassInforLayout";
import { Modal, SetModal } from "../components/modal";
import MemberItem from "../item/MemberItem";
import SetItem from "../item/SetItem";
import { getClass, setClassId } from "../store/class/slice";

const ClassPage = () => {
  // Lấy params id của url
  const { classId } = useParams();
  const [showModal, setShowModal] = useState(false);

  const { classId: id, classInfo } = useSelector((state) => state.class);
  console.log(classInfo);

  const host = classInfo.createdBy?.[0];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClass(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setClassId(classId));
  }, [dispatch, classId]);

  const handleShowModel = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Header></Header>
      <div className="p-[64px]">
        <div className="mt-[50px] flex items-center justify-between">
          {/* Classname */}
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/dusk/64/40C057/class.png"
              className="object-cover"
              alt="class-icon"
            />
            <div className="text-[35px] font-semibold ml-[18px]">
              {classInfo.name || "Classname"}
            </div>
          </div>
          {/* Icon */}
          <div className="flex">
            <div className="w-[38px] h-[38px] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="w-[38px] h-[38px] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div className="w-[38px] h-[38px] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="w-[38px] h-[38px] text-[20px] flex items-center justify-center rounded-full border-[2px] solid border-[#d9dde8] text-[#646f90] font-bold transition duration-100ms ease-in ml-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Middle */}
        <Tabs>
          <TabList className="flex mt-[18px] border-b-[3px] mb-[4px]">
            <Tab
              className="line-green mx-[16px] text-[16px] font-semibold text-[#303545] cursor-pointer"
              // Nếu Active thì có class là active
              selectedClassName="active"
            >
              Sets
            </Tab>
            <Tab
              className="line-green mx-[16px] text-[16px] font-semibold text-[#303545] cursor-pointer"
              selectedClassName="active"
            >
              Folders
            </Tab>
            <Tab
              className="line-green mx-[16px] text-[16px] font-semibold text-[#303545] cursor-pointer"
              selectedClassName="active"
            >
              Members
            </Tab>
          </TabList>
          <TabPanel>
            <div className="flex">
              {classInfo.setNum === 0 ? (
                <NoCourse word="set" onClick={handleShowModel}></NoCourse>
              ) : (
                <ClassDetailInfo
                  className={"grid grid-cols-3 flex-1 p-10 gap-8"}
                >
                  <SetItem></SetItem>
                  <SetItem></SetItem>
                  <SetItem></SetItem>
                  <SetItem></SetItem>
                  <SetItem></SetItem>
                </ClassDetailInfo>
              )}
              <ClassInforLayout
                hostName={host?.name}
                hostAvatar={host?.avatarUrl}
                hostEmail={host?.email}
                setNum={classInfo.setNum}
                memberNum={classInfo.memberNum}
                forlderNum={classInfo.folderNum}
              ></ClassInforLayout>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex">
              {classInfo.folderNum === 0 ? (
                <NoCourse word="folder"></NoCourse>
              ) : (
                <ClassDetailInfo
                  className={"grid grid-cols-3 flex-1 p-10 gap-8"}
                >
                  <SetItem></SetItem>
                </ClassDetailInfo>
              )}
              <ClassInforLayout
                hostName={host?.name}
                hostAvatar={host?.avatarUrl}
                hostEmail={host?.email}
                setNum={classInfo.setNum}
                memberNum={classInfo.memberNum}
                forlderNum={classInfo.folderNum}
              ></ClassInforLayout>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex">
              {classInfo.folderNum !== 0 ? (
                <NoCourse word="member"></NoCourse>
              ) : (
                <ClassDetailInfo className={"flex-1 p-10"}>
                  <MemberItem></MemberItem>
                </ClassDetailInfo>
              )}
              <ClassInforLayout
                hostName={host?.name}
                hostAvatar={host?.avatarUrl}
                hostEmail={host?.email}
                setNum={classInfo.setNum}
                memberNum={classInfo.memberNum}
                forlderNum={classInfo.folderNum}
              ></ClassInforLayout>
            </div>
          </TabPanel>
        </Tabs>
        {/* Course */}
      </div>
      <Modal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        title="Add a set"
      >
        <SetModal></SetModal>
      </Modal>
    </div>
  );
};

export default ClassPage;
