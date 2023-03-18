import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaMapMarker, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CampgroundCard = ({ campground }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`${campground._id}`);
  };

  return (
    <>
      <Card
        className="campCard"
        styles={{ width: "18rem", height: "25rem" }}
        key={campground._id}
      >
        <Card.Img variant="top" className="cardImg" src={campground.image} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle ">{campground.title}</Card.Title>
          <Card.Text className="location px-2 cardDetails text-muted">
            <FaMapMarker /> {campground.location}
          </Card.Text>
          <Card.Text className="price cardDetails px-2 text-muted">
            <FaDollarSign /> {campground.price}
          </Card.Text>
          <Card.Text style={{ height: "5em" }} className=" cardDescription">
            <p classname="cardText py-5">
              {campground.description.substring(0, 150)}...
            </p>
          </Card.Text>
          <Button
            onClick={onClick}
            className="my-2 py-2 cardBtn"
            variant="primary"
          >
            View {campground.title}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CampgroundCard;
