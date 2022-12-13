import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./pages/Header";
import AddCampground from "./pages/AddCampground";
import { ToastContainer } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/addCampground" element={<AddCampground />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
