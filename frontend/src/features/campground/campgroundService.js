import axios from "axios";

const BASE_URL = "http://localhost:3001/api/campgrounds/";

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
};

export default campgroundService;
