import axios from "axios";

const BASE_URL = "https://campbuddy.onrender.com/api/users/";

const getAllUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const register = async (userData) => {
  const response = await axios.post(BASE_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${BASE_URL}login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//delete user from localstorage to logout
const logout = () => {
  localStorage.removeItem("user");
};
const authService = { register, login, logout, getAllUsers };
export default authService;
