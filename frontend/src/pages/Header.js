import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { logout, reset } from "../features/auth/authSlice";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <Navbar>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>CampBuddy</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>Campgrounds</Nav.Link>
              <Nav.Link>Add New</Nav.Link>
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
};

export default Header;
