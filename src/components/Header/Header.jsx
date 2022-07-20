import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

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
                <Link to="/home">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
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
                <div className="header_location d-flex align-items-center gap-2">
                  <h4>Sunday to Friday</h4>
                  <h6>09:am - 06:pm</h6>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0">
              <button className="header_btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
