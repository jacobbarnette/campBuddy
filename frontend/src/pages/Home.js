import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import { getAllCampgrounds } from "../features/campground/campgroundSlice";
import { getAllUsers } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { campgrounds, status } = useSelector((state) => state.campground);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  if (status === "loading") {
    return (
      <div className="spinnerDiv">
        <Spinner
          style={{ width: "4rem", height: "4rem" }}
          className="spinner"
          size="xxl"
          animation="border"
        ></Spinner>
      </div>
    );
  } else {
    return (
      <section className="welcome">
        <h2 className="welcomeTxt py-4 welcomeHeader paragraphTxt">
          Welcome to CampBuddy!
        </h2>
        <p className="welcomeTxt px-4 paragraphTxt">
          Jump right in and explore our many campgrounds
        </p>
        <p className="welcomeTxt px-4 paragraphTxt">
          Feel free to share some of your own and comment on others!
        </p>

        <a href="/Campgrounds" className="viewCampgroundBtn">
          <p className="text-center welcomeTxt viewCampgrounds">
            {" "}
            View Campgrounds
          </p>
        </a>
      </section>
    );
  }
};

export default Home;
