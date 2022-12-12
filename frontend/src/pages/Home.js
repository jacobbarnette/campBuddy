import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  console.log(user);
  return (
    <section className="welcome">
      <h1>Welcome to CampBuddy</h1>
      <section className="loginBtn">
        <button variant="primary" className="homeLoginBtn">
          Sign In
        </button>
      </section>
    </section>
  );
};

export default Home;
