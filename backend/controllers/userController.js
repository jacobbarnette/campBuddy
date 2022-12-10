const registerUser = (req, res) => {
  res.json({ message: "register user" });
};

const loginUser = (req, res) => {
  res.json({ message: "login user" });
};

const getMe = (req, res) => {
  res.json({ message: "user data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
