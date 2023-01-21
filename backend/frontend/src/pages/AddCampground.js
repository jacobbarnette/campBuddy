import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCampground } from "../features/campground/campgroundSlice";
const AddCampground = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
    price: "",
  });

  const initialState = {
    title: "",
    location: "",
    description: "",
    image: "",
    price: "",
  };

  //destrucute state object
  const { title, location, description, image, price } = formData;

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
      price,
    };

    dispatch(createCampground(campgroundData));
    toast.success(`${title} added`);
    resetFormData();

    navigate("/Campgrounds");
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <h1 className="text-center">Add Campground</h1>
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
          as="textarea"
          rows={4}
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
      <Form.Group className="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control
          type="currency"
          id="price"
          name="price"
          value={price}
          onChange={onChange}
          placeholder="enter price"
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
      <ToastContainer />
    </Form>
  );
};

export default AddCampground;
