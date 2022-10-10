import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/home/logo.png";
import useToggleValue from "../../hooks/useToggleValue";
import useAuthStateChanged from "../../hooks/useAuthStateChanged";
import { SmallButton } from "../button";
import { CreateBox, UserIcon } from "../box";
import axios from "axios";
import { ClassModal, Modal } from "../modal";
import { useDispatch } from "react-redux";
import {
  setMessage,
  setShowAlert,
  setType,
} from "../../store/alert/alertSlice";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";

const ListLink = [
  {
    id: 1,
    to: "#",
    title: "Home",
  },
  {
    id: 2,
    to: "#",
    title: "Dic",
  },
  {
    id: 3,
    to: "#",
    title: "About us",
  },
];

const Header = () => {
  const { value: show, handleToggleValue: handleIconClick } = useToggleValue();

  const { isLogin } = useAuthStateChanged();
  console.log("isLogin", isLogin);

  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/v1/users/logout");
      // refresh lại trang
      navigate(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowModel = () => {
    setShowModal(true);
  };
  const dispatch = useDispatch();
  const handleAlert = () => {
    dispatch(setShowAlert(true));
    dispatch(setMessage("You are not logged in! Please log in to get access."));
    dispatch(setType("notice"));
  };

  useEffect(() => {
    if (!isLogin) {
    } else {
      connectWithSocketServer();
    }
  }, [isLogin]);
  return (
    <>
      <header className="max-h-[63px] flex items-center justify-between py-[15px] px-[20px] fixed bg-white z-20 w-full border border-b-[0.0625rem] solid">
        {/* Header left */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[48px]" />
          </Link>
          <ul className="lg:flex hidden text-[16px] font-medium text-[#2e3856] items-center">
            {ListLink.map((link) => (
              <li className="ml-[16px]" key={link.id}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
            <li>
              <SmallButton
                className="text-white bg-primary hover:bg-secondary relative"
                onClick={isLogin ? handleIconClick : handleAlert}
              >
                <span>Create</span>
                <CreateBox
                  showBox={show}
                  isLogin={isLogin}
                  handleShowModel={handleShowModel}
                ></CreateBox>
              </SmallButton>
            </li>
          </ul>
        </div>
        {/* Header right */}
        <div className="text-[#2e3856] gap-[20px] items-center hidden lg:flex">
          {!isLogin && (
            <>
              <SmallButton className="bg-white hover:bg-[#f6f7fb]">
                <Link to={"/sign-in"}>Log in</Link>
              </SmallButton>
              <SmallButton className="bg-[#ffcd1f] hover:bg-[#ffdc62]">
                <Link to={"/sign-up"}>Sign up</Link>
              </SmallButton>
            </>
          )}
          {isLogin && (
            <>
              <SmallButton
                className="bg-[#ffcd1f] hover:bg-[#ffdc62]"
                onClick={handleLogout}
              >
                Log out
              </SmallButton>
              <UserIcon></UserIcon>
            </>
          )}
        </div>
        <div
          className={`menu-button w-[30px] h-[30px] cursor-pointer block lg:hidden ${
            show ? "show" : ""
          }`}
          onClick={handleIconClick}
        >
          <span className="w-full rounded-lg h-[4.5px] bg-[#96998b] block mt-[6px] transition ease duration-200"></span>
          <span className="w-full rounded-lg h-[3.5px] bg-[#96998b] block mt-[6px] transition ease duration-200"></span>
          <span className="w-full rounded-lg h-[4.5px] bg-[#96998b] block mt-[6px] transition ease duration-200"></span>
        </div>
        {/* Menu */}
        <div
          className={`menu-sections absolute h-screen top-full height-0 left-0 right-0 bg-[#ffffff] w-full flex items-center justify-center lg:hidden ${
            show ? "show" : ""
          }`}
        >
          <ul className="my-0 mx-[2rem] text-center">
            <li className="py-[1.25rem] text-[2.5rem] text-[#90b498] tracking-[10px] cursor-pointer">
              Home
            </li>
            <li className="py-[1.25rem] text-[2.5rem] text-[#90b498] tracking-[10px] cursor-pointer">
              Dictionaries
            </li>
            <li className="py-[1.25rem] text-[2.5rem] text-[#90b498] tracking-[10px] cursor-pointer">
              About us
            </li>
          </ul>
        </div>

        <Modal showModal={showModal} handleClose={() => setShowModal(false)}>
          <ClassModal></ClassModal>
        </Modal>
      </header>
    </>
  );
};

export default Header;
