import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CampgroundCard from "../components/CampgroundCard";
import { getAllCampgrounds } from "../features/campground/campgroundSlice";
const Campgrounds = () => {
  const dispatch = useDispatch();

  const { campgrounds, status } = useSelector((state) => state.campground);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllCampgrounds());
    }
  }, [status, dispatch]);

  if (status === "looading") {
    return "...loading";
  } else {
    const campCards = campgrounds.map((campground) => {
      return <CampgroundCard campground={campground} />;
    });
    return (
      <Container fluid>
        <Row xs="1" md="4">
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
