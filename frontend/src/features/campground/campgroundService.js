import axios from "axios";

//changed from
const BASE_URL = "https://campbuddy.onrender.com/api/campgrounds/";

// get all

//get all cammpgrounds by ID

const getCampgroundById = async (id) => {
  const response = await axios.get(`${BASE_URL}${id}`);
  return response.data;
};

//create campground
const createCampground = async (campgroundData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(BASE_URL, campgroundData, config);

  return response.data;
};

const createComment = async ({ id, token, comment }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const newComment = {
    comment: comment,
  };

  const response = await axios.post(
    `${BASE_URL}${id}/comments`,
    newComment,
    config
  );

  return response.data;
};

//delete campground
const deleteCampground = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${BASE_URL}${id}`, config);

  return response.data;
};

//edit campground
const editCampground = async (id, newCampground, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${BASE_URL}/${id}`, newCampground, config);
  return response.data;
};
const campgroundService = {
  createCampground,
  getCampgroundById,
  deleteCampground,
  editCampground,
  createComment,
};

export default campgroundService;
