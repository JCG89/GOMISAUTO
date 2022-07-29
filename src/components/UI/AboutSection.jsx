import React from "react";
import "../../styles/AboutSection.css";

import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <section className="about_section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_section-content">
              <h4 className="about_subtitle">BIENVENUE CHEZ GOMISAUTO</h4>
              <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium animi quos nulla sint iure aliquam molestiae,
                necessitatibus nesciunt ullam optio sed. Veritatis sint ea
                reprehenderit praesentium delectus, suscipit consequatur? Ipsum.
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet.
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet.
                </p>
              </div>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet.
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
