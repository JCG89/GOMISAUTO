import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import carData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/CarDetails.css";
const CarDetails = () => {
  const { slug } = useParams();
  console.log(useParams);
  const singleCarItem = carData.find((item) => {
    return item.carName === slug;
  });
  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="car" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car_info">
                <h3 className="section_title"> {singleCarItem.carName} </h3>
                <div className="d-flex align-items-center gap-5 mb-4 mt-5">
                  <h6 className="rent_price">
                    {" "}
                    {singleCarItem.price}.00€ / jour{" "}
                  </h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-line"></i>
                      <i className="ri-star-line"></i>
                      <i className="ri-star-line"></i>
                      <i className="ri-star-line"></i>
                      <i className="ri-star-line"></i>
                    </span>
                    ({singleCarItem.rating} notes)
                  </span>
                </div>
                <p className="section_description">
                  {singleCarItem.description}
                </p>
                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="d-f align-items-center gap-1 section_description">
                    <i class="ri-car-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.model}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      class="ri-settings-3-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.automatic}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i class="ri-time-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.speed}
                  </span>
                </div>
                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-f align-items-center gap-1 section_description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.gps}
                  </span>
                  <span className="d-f align-items-center gap-2 section_description">
                    <i class="ri-car-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.model}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.seatType}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
