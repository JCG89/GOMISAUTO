import React from "react";
import "../../styles/BecomeDriver.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriver = () => {
  return (
    <section className="become_driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <img src={driverImg} alt="" className="w-100" />
          </Col>
          <Col lg="6" md="6" sm="12">
            <h5 className="section_title become_driver-title">
              Vous Voulez Réaliser Vos envies Avec Nous ? Alors Ne Tardez pas
            </h5>
            <button className="btn become_driver-btn mt-4">
              Deviens conducteur chez GOMISAUTO
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriver;
