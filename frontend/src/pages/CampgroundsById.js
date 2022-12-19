import React from "react";
import { useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCampground,
  editCampground,
} from "../features/campground/campgroundSlice";
import {
  Container,
  Card,
  Col,
  Row,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

const CampgroundsById = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
    price: "",
  });
  const { id } = useParams();
  const { campgrounds } = useSelector((state) => state.campground);
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setFormData({
      title: renderedCampground[0].title,
      location: renderedCampground[0].location,
      description: renderedCampground[0].description,
      image: renderedCampground[0].image,
      price: renderedCampground[0].price,
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //filter campgrounds by id and return with matching
  const renderedCampground = campgrounds.filter(
    (campground) => campground._id === id
  );
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { title, location, description, image, price } = formData;
  const onSubmit = (e) => {
    e.preventDefault();

    const newCampground = {
      id,
      title,
      location,
      price,
      description,
      image,
    };

    dispatch(editCampground({ id, newCampground: formData }));
  };

  //destructure renderedCampground
  //const { title, description, image, price, location, _id } =
  //renderedCampground[0];

  //check if user added campground, if true render delete/edit btn
  const didUserAddCampground = () => {
    if (user._id === renderedCampground[0].user) {
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Edit Campground
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteCampground(id));
              navigate("/Campgrounds");
            }}
          >
            Delete
          </Button>
        </>
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {campgrounds.map((campground) => {
              return (
                <ListGroup.Item
                  action
                  onClick={() => navigate(`/Campgrounds/${campground._id}`)}
                >
                  {campground.title}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
        <Col>
          <Card key={renderedCampground[0]._id}>
            <Card.Img variant="top" src={renderedCampground[0].image} />
            <Card.Body>
              <Card.Title>{renderedCampground[0].title}</Card.Title>
              <Card.Text>{renderedCampground[0].description}</Card.Text>
            </Card.Body>
          </Card>
          {didUserAddCampground()}
        </Col>
      </Row>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit {renderedCampground[0].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit} className="form">
              <Form.Group className="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={onChange}
                  placeholder={"enter title"}
                />{" "}
                lol
              </Form.Group>
              <Form.Group className="location">
                <Form.Label>Location:</Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={onChange}
                  placeholder="enter location"
                />
              </Form.Group>
              <Form.Group className="description ">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  onChange={onChange}
                  placeholder="enter description"
                />
              </Form.Group>
              <Form.Group className="image">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  type="text"
                  id="image"
                  name="image"
                  value={image}
                  onChange={onChange}
                  placeholder="confirm image"
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
                Add Campground
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
};

export default CampgroundsById;
