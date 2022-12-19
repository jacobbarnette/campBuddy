import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { logout, reset } from "../features/auth/authSlice";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  if (location.pathname === "/") {
    return (
      <>
        <Navbar className="navBar" fixed="top">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>CampBuddy</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <LinkContainer to="/Campgrounds">
                  <Nav.Link>Campgrounds</Nav.Link>
                </LinkContainer>
                <LinkContainer to="addCampground">
                  <Nav.Link>Add New</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className="ms-auto">
                {user ? (
                  <>
                    <Nav.Link>Signed in as {user.name}</Nav.Link>
                    <LinkContainer to="/">
                      <Nav.Link onClick={onLogout}>
                        {" "}
                        <FaSignOutAlt />
                        Logout
                      </Nav.Link>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        {" "}
                        <FaSignInAlt /> Login
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link>
                        {" "}
                        <FaUser />
                        Register
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
          <br />
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar className="navBar" bg="dark" fixed="top">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>CampBuddy</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <LinkContainer to="/Campgrounds">
                  <Nav.Link>Campgrounds</Nav.Link>
                </LinkContainer>
                <LinkContainer to="addCampground">
                  <Nav.Link>Add New</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className="ms-auto">
                {user ? (
                  <>
                    <Nav.Link>Signed in as {user.name}</Nav.Link>
                    <LinkContainer to="/">
                      <Nav.Link onClick={onLogout}>
                        {" "}
                        <FaSignOutAlt />
                        Logout
                      </Nav.Link>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        {" "}
                        <FaSignInAlt /> Login
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link>
                        {" "}
                        <FaUser />
                        Register
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
          <br />
        </Navbar>
      </>
    );
  }
};

export default Header;
