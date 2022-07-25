import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const Home = () => {
  return (
    <Helmet title="home">
      {/* Hero section*/}
      <section className="p-0 hero_slider-section">
        <HeroSlider />
        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find_cars-left">
                  <h4>RESERVEZ VOTRE BIJOUX ICI </h4>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*=============About section=============*/}
      <AboutSection />
      {/*=========Services section*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2
                className="section_title  text-center"
                style={{ color: "rgb(15, 79, 59, 0.9)" }}
              >
                Nos Services favoris
              </h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/**============car offer section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section_subtitle"> Viens avec</h6>
              <h2 className="section_title">Des offres chaudes</h2>
            </Col>
            {carData.slice(0, 6).map((item) => {
              return <CarItem item={item} key={item.id} />;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Home;
