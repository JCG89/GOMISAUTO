import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import carData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/CarDetails.css";
import BookingForm from "../components/UI/BookingForm";
import Payment from "../components/UI/Payment";
const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => {
    return item.carName === slug;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);
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
                    <i className="ri-car-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.model}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      className="ri-settings-3-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.automatic}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      className="ri-time-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.speed}
                  </span>
                </div>
                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      className="ri-map-pin-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.gps}
                  </span>
                  <span className="d-f align-items-center gap-2 section_description">
                    <i className="ri-car-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.model}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.seatType}
                  </span>
                  <span className="d-f align-items-center gap-1 section_description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="7" className="mt-5">
              <div className="booking-info">
                <h5 className="mb-4 fw-bold">Coordonnées de résérvation </h5>
                <BookingForm />
              </div>
            </Col>
            <Col lg="5" className="mt-5">
              <div className="payement-info mt-5">
                <h5 className="mb-4 fw-bold"> Information de paiement </h5>
                <Payment />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
