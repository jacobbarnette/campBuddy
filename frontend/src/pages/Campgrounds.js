import { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
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

  if (status === "loading" || status === "idle") {
    return (
      <div className="spinnerDiv">
        <Spinner
          style={{ width: "4rem", height: "4rem" }}
          className="spinner"
          size="xxl"
          animation="border"
        ></Spinner>
      </div>
    );
  } else {
    return (
      <Container className="cardContainer" fluid>
        <Row
          className="gy-4 px-5 py-3"
          xs="1"
          lg="3"
          xxl="4"
          styles={{ height: "20px" }}
        >
          {campgrounds.map((campground, i) => (
            <Col>
              <CampgroundCard key={i} campground={campground} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default Campgrounds;
