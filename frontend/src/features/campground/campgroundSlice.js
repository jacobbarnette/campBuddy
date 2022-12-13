import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import campgroundService from "./campgroundService";
const initialState = {
  campgrounds: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
//create new campground
export const createCampground = createAsyncThunk(
  "campgrounds/create",
  async (campgroundData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log(token);
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
  name: "campground",
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
      });
  },
});

export const { reset } = campgroundSlice.actions;
export default campgroundSlice.reducer;
