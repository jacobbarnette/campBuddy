import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //destrucute state object
  const { name, email, password, password2 } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name can not be empty");
    }
    if (email === "") {
      toast.error("Email can not be empty ");
    }
    if (password !== password2) {
      toast.error(`Passwords do not match`);
    } else {
      const userData = {
        name,
        email,
        password,
      };
      toast.success(`${name} has been registered!`);
      dispatch(register(userData));
    }
  };
  return (
    <Form onSubmit={onSubmit} className="loginForm py-2">
      <Form.Group className="name py-2">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="enter name"
        />
      </Form.Group>
      <Form.Group className="email py-2">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="enter email"
        />
      </Form.Group>
      <Form.Group className="password py-2">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="enter password"
        />
      </Form.Group>
      <Form.Group className="password py-2">
        <Form.Label> Confirm Password:</Form.Label>
        <Form.Control
          type="password"
          id="password2"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="confirm password"
        />
      </Form.Group>
      <br />
      <Button
        style={{ width: "100%", backgroundColor: "#212529", border: "none" }}
        size="lg"
        variant="primary"
        type="submit"
      >
        Register
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default Register;
