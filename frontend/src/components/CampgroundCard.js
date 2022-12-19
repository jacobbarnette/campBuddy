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
    <>
      <br />

      <Card
        className="campCard"
        styles={{ width: "18rem", height: "25rem" }}
        key={campground._id}
      >
        <Card.Img variant="top" className="cardImg" src={campground.image} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle ">{campground.title}</Card.Title>
          <Card.Text className="cardDescription">
            {campground.description.substring(0, 200)}...
          </Card.Text>
          <Button onClick={onClick} className="cardBtn" variant="primary">
            View {campground.title}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CampgroundCard;
