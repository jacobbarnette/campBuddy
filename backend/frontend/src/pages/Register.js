import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
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
    if (password !== password2) {
      toast.error(`Passwords do not match`);
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  return (
    <Form onSubmit={onSubmit} className="form">
      <Form.Group className="name ">
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
      <Form.Group className="email ">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="enter email"
        />
      </Form.Group>
      <Form.Group className="password ">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="enter password"
        />
      </Form.Group>
      <Form.Group className="password ">
        <Form.Label> Confirm Password:</Form.Label>
        <Form.Control
          type="text"
          id="password2"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="confirm password"
        />
      </Form.Group>
      <br />
      <Button
        style={{ width: "100%" }}
        classname="registerBtn"
        size="lg"
        variant="primary"
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};

export default Register;
