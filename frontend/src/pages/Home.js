import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { getAllCampgrounds } from "../features/campground/campgroundSlice";
const Home = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  console.log(user);
  return (
    <section className="welcome">
      <h2 className="welcomeTxt py-4 welcomeHeader paragraphTxt">
        Welcome to CampBuddy!
      </h2>
      <p className="welcomeTxt paragraphTxt">
        Jump right in and explore our many campgrounds
      </p>
      <p className="welcomeTxt paragraphTxt">
        Feel free to share some of your own and comment on others!
      </p>
    </section>
  );
};

export default Home;
