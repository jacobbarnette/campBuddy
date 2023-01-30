import React from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteCampground } from "../features/campground/campgroundSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const DeleteConfirmation = ({
  deleteShow,

  handleDeleteClose,
  campground,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Modal show={deleteShow} onHide={handleDeleteClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {campground.title}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(deleteCampground(campground._id));
            navigate("/Campgrounds");
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
