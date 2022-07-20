import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../../styles/Footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
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
    path: "/contact",
    display: "Contact",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="footer footer_logo">
              <h1>
                <Link
                  to="/home"
                  className="d-flex align-items-center gap-2"
                  style={{ textDecoration: "none" }}
                >
                  <i class="ri-car-line"></i>
                  <span>GOMISAUTO</span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              tempore dolorum dolore deserunt optio, assumenda qui impedit
              debitis sint provident fugit quod aperiam, accusamus aspernatur,
              magnam commodi voluptates a nobis.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title">
                <ListGroup>
                  {quickLinks.map((link, index) => {
                    return (
                      <ListGroupItem
                        key={index}
                        className="p-0 mt-3 quick_link"
                      >
                        <Link
                          to={link.path}
                          style={{
                            textDecoration: "none",

                            fontSize: "14px",
                          }}
                        >
                          {link.display}
                        </Link>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </h5>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head of office</h5>
              <p className="office_info">
                14 Avenue de la République 94500 Champigny/Marne
              </p>
              <p className="office_info">Tel: 06 21 45 60 56</p>
              <p className="office_info">Email: christophegomis89@gmail.com</p>
              <p className="office_info">Office Time: 09am - 06pm</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer_link-title">Newsletter</h5>
              <p className="section_description">Subscribe newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-mail-send-fill"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
