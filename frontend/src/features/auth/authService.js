import axios from "axios";

const BASE_URL = "http://localhost:3001/api/users";

const register = async (userData) => {
  const response = await axios.post(BASE_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = { register };
export default authService;
