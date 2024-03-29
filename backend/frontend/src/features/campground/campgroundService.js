import axios from "axios";

const BASE_URL = "http://localhost:3001/api/campgrounds/";

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
  console.log(`campground service ${newCampground}, ${id}`);
  const response = await axios.put(`${BASE_URL}${id}`, newCampground, config);
  return response.data;
};
const campgroundService = {
  createCampground,
  getCampgroundById,
  deleteCampground,
  editCampground,
};

export default campgroundService;
