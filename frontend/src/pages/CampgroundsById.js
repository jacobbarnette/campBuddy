import React from "react";
import { redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Card, Col, Row, ListGroup, Button } from "react-bootstrap";
const CampgroundsById = () => {
  //get id from params
  const { id } = useParams();
  const { campgrounds } = useSelector((state) => state.campground);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  //filter campgrounds by id and return with matching
  const renderedCampground = campgrounds.filter(
    (campground) => campground._id === id
  );

  //destructure renderedCampground
  const { title, description, image, price, location, _id } =
    renderedCampground[0];

  //check if user added campground, if true render delete/edit btn
  const didUserAddCampground = () => {
    if (user._id === renderedCampground[0].user) {
      return (
        <>
          <Button>Edit Campground</Button>
          <Button>Delete</Button>
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
          <Card key={_id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
          {didUserAddCampground()}
        </Col>
      </Row>
    </Container>
  );
};

export default CampgroundsById;
