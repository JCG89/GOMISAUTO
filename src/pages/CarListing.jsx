import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const CarListing = () => {
  return (
    <Helmet title="Voitures">
      <CommonSection title="Nos collections" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="collection">
              <div className="d-flex align-items-center gap-3 mb-10">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i>
                </span>
                <select name="" id="select">
                  <option>Select</option>
                  <option value="">De bas en haut</option>
                  <option value="">De Haut en bas! </option>
                </select>
              </div>
            </Col>
            {carData.map((item) => {
              return <CarItem item={item} key={item.id} />;
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
