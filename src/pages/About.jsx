import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriver from "../components/UI/BecomeDriver";
import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";

const About = () => {
  return (
    <Helmet title="about">
      <CommonSection title="A PROPOS DE NOUS" />
      <AboutSection />
      <section className="about_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-img">
                <img src={driveImg} alt="drive" className="w-100 rounded-3" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-content">
                <h2 className="section_title">
                  Nous nous engageons à fournir des solutions de conduite sûres
                </h2>
                <p className="section_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio labore beatae magni numquam iure nam modi minus
                  nihil libero accusantium laudantium laborum, consequuntur
                  assumenda aliquam deserunt similique optio illum! Nisi!
                </p>
                <p className="section_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio labore beatae magni numquam iure nam modi minus
                  nihil libero accusantium laudantium laborum, consequuntur
                  assumenda aliquam deserunt similique optio illum! Nisi!
                </p>
                <div lassName="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section_subtitle">Besoin d'aide ?</h6>
                    <h4>06 21 45 60 56 </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriver />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section_subtitle">Nos experts</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
