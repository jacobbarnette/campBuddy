import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/campgrounds/";

//get all campgrounds

const getCampgroundById = async (id) => {
  const response = await axios.get(`${BASE_URL}${id}`);
  return response.data;
};

const createCampground = async (campgroundData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(BASE_URL, campgroundData, config);

  return response.data;
};

const campgroundService = {
  createCampground,
  getCampgroundById,
};

export default campgroundService;
