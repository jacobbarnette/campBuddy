import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { Card } from "react-bootstrap";
import photo from "../assets/imgs/loginPhoto.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //destrucute state object
  const { email, password } = formData;

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
    if (!password) {
      toast.error(`Password is incorrect`);
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };
  return (
    <Card className=" loginForm" styles={{ width: "18rem", height: "25rem" }}>
      <Card.Img
        variant="top"
        src={photo}
        className="loginImg cardImg"
      ></Card.Img>
      <Card.Body className="cardBody">
        <Form onSubmit={onSubmit} className=" ">
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

          <br />
          <Button
            style={{ width: "100%" }}
            classname="registerBtn"
            size="lg"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
