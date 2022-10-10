import React, { lazy } from "react";

const Header = lazy(() => import("../components/common/Header"));
const HomePoster = lazy(() => import("../components/home/HomePoster"));

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <HomePoster></HomePoster>
    </>
  );
};

export default HomePage;
