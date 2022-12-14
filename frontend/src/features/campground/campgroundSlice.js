import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import campgroundService from "./campgroundService";

const BASE_URL = "http://localhost:3001/api/campgrounds/";
const initialState = {
  campgrounds: [],
  status: "idle",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAllCampgrounds = createAsyncThunk(
  "camp/getallcampgrounds",
  async () => {
    const response = await axios.get(BASE_URL);

    return response.data;
  }
);

//create new campground
export const createCampground = createAsyncThunk(
  "campgrounds/create",
  async (campgroundData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await campgroundService.createCampground(campgroundData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const campgroundSlice = createSlice({
  name: "campgrounds",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCampground.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCampground.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campgrounds.push(action.payload);
      })
      .addCase(createCampground.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCampgrounds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCampgrounds.fulfilled, (state, action) => {
        state.status = "success";
        console.log(state.campgrounds.campgrounds);
        state.campgrounds = state.campgrounds.concat(action.payload);
      })
      .addCase(getAllCampgrounds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = campgroundSlice.actions;
export default campgroundSlice.reducer;
