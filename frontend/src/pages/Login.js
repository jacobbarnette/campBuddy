import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Form className="form">
      <Form.Group className="email ">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>
      <Form.Group className="password ">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="enter password" />
      </Form.Group>
      <br />
      <Button
        style={{ width: "100%" }}
        classname="loginBtn"
        size="lg"
        variant="primary"
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
};

export default Login;
