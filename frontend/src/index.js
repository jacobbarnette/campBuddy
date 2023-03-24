import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllCampgrounds } from "./features/campground/campgroundSlice";
import { getAllUsers } from "./features/auth/authSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

async function main() {
  store.dispatch(getAllCampgrounds());
  store.dispatch(getAllUsers());

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

main();
