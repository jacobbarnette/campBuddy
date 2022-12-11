import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <Form className="form">
      <Form.Group className="name ">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="enter name" />
      </Form.Group>
      <Form.Group className="email ">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="enter email" />
      </Form.Group>
      <Form.Group className="password ">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="enter password" />
      </Form.Group>
      <Form.Group className="password ">
        <Form.Label> Confirm Password:</Form.Label>
        <Form.Control type="password" placeholder="confirm password" />
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
