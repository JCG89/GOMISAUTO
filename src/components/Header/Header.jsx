import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      {/*------header top*/}

      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i class="ri-phone-line"></i>+33621456056
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*------Header_top*/}
      <div className="header_middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>GOMISAUTO</span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-fill"></i>
                </span>
                <div className="header_location_content">
                  <h4>Paris ,FRANCE</h4>
                  <h6>Champigny Sur Marne</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>Sunday to Friday</h4>
                  <h6>09:am - 06:pm</h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0">
              <button className="header_btn btn d-flex align-items-center justify-content-end text-end">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>

        {/* Main navigation*/}
        <div className="main_navbar">
          <Container>
            <div className="navigation_wrapper d-flex align-items-center justify-content-between">
              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
              <div className="navigation">
                <div className="menu">
                  {navLinks.map((item, index) => {
                    return (
                      <NavLink
                        to={item.path}
                        key={index}
                        className={(navClass) =>
                          navClass.isActive ? "nav_active " : "nav_item"
                        }
                      >
                        {item.display}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div className="nav_right">
                <div className="search_box">
                  <input type="text" placeholder="Search" />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
