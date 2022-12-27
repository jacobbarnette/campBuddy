import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CampgroundCard from "../components/CampgroundCard";
import { getAllCampgrounds } from "../features/campground/campgroundSlice";

const Campgrounds = () => {
  const dispatch = useDispatch();

  const { campgrounds, status } = useSelector((state) => state.campground);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllCampgrounds());
    }
  }, [status, dispatch]);

  if (status === "looading") {
    return "...loading";
  } else {
    return (
      <Container className="cardContainer" fluid>
        <Row className="gy-4" xs="1" md="4" styles={{ height: "20px" }}>
          {campgrounds.map((campground, i) => (
            <Col>
              <CampgroundCard campground={campground} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default Campgrounds;
