import React from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "/tour", display: "Tour" },
  { path: "/about", display: "About" },
];

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          {/* Logo */}
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo_image" />
            </div>

            {/* Nagigation */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className= {(navClass=> navClass.isActive ? 'active__link' : "")
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
