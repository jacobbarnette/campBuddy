import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCampgrounds } from "../features/campground/campgroundSlice";
const Home = () => {
  const dispatch = useDispatch();

  const { campgrounds, status } = useSelector((state) => state.campground);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllCampgrounds());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return "...loading";
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
      </section>
    );
  }
};

export default Home;
