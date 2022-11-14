import react from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
export const MainNavbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      className="main-navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/news");
          }}
        >
          Profile
          <PersonIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("entries");
              }}
            >
              My entries
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/news");
              }}
            >
              Pricing
            </Nav.Link>
            <NavDropdown title="Options" id="collasible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/news");
                }}
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/news");
                }}
              >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/news");
                }}
              >
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  navigate("/news");
                }}
              >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("news");
              }}
            >
              News
              <ArticleIcon />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Log out
              <LogoutIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
