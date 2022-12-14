import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCampground } from "../features/campground/campgroundSlice";
const AddCampground = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
  });

  const initialState = {
    title: "",
    location: "",
    description: "",
    image: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //destrucute state object
  const { title, location, description, image } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetFormData = () => {
    setFormData(initialState);
  };
  //form submit
  const onSubmit = (e) => {
    e.preventDefault();

    const campgroundData = {
      title,
      location,
      description,
      image,
    };

    dispatch(createCampground(campgroundData));
    resetFormData();
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <Form.Group className="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="enter title"
        />
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
  );
};

export default AddCampground;
