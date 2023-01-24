import axios from "axios";

const BASE_URL = "https://campbuddy.onrender.com/api/users/";

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
const authService = { register, login, logout };
export default authService;
