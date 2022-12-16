import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CampgroundCard = ({ campground }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`${campground._id}`);
  };
  return (
    <Card key={campground._id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{campground.title}</Card.Title>
        <Card.Text>{campground.description}</Card.Text>
        <Button onClick={onClick} variant="primary">
          View {campground.title}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CampgroundCard;
