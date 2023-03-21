import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import campgroundService from "./campgroundService";

//changed from https://campbuddy.onrender.com/api/campgrounds
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

export const postComment = createAsyncThunk(
  "camp/postComment",

  async ({ id, comment }, thunkAPI) => {
    console.log(id, comment);
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await campgroundService.createComment({ id, token, comment });
    } catch (error) {
      console.log(error);
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

//delete single campground
export const deleteCampground = createAsyncThunk(
  "campgrounds/delete",

  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await campgroundService.deleteCampground(id, token);
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

//edit campground
export const editCampground = createAsyncThunk(
  "campgrounds/edit",

  async ({ id, newCampground }, thunkAPI) => {
    const { title, location, description, image, price } = newCampground;
    try {
      console.log(`try statement is running`);

      return await campgroundService.editCampground(id, {
        title,
        location,
        description,
        image,
        price,
      });
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
      .addCase(postComment.pending, (state) => {
        state.status = "loading";
        console.log(state.campgrounds);
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = "success";
        console.log(state.campgrounds, action.payload);
        state.campgrounds.push(action.payload);
      })
      .addCase(postComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCampgrounds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCampgrounds.fulfilled, (state, action) => {
        state.status = "success";

        state.campgrounds = state.campgrounds.concat(action.payload);
      })
      .addCase(getAllCampgrounds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCampground.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCampground.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campgrounds = state.campgrounds.filter(
          (campground) => campground._id !== action.payload.id
        );
      })
      .addCase(deleteCampground.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editCampground.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editCampground.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { title, _id, location, description, image, price } =
          action.payload;
        console.log(title, _id, location, description, image, price);
        const existingCampground = state.campgrounds.find(
          (campground) => campground._id === _id
        );
        if (existingCampground) {
          existingCampground.title = title;
          existingCampground.location = location;
          existingCampground.price = price;
          existingCampground.description = description;
          existingCampground.image = image;
        }
      })
      .addCase(editCampground.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log(action.payload);
        state.message = action.payload;
      });
  },
});

export const { reset } = campgroundSlice.actions;
export default campgroundSlice.reducer;
