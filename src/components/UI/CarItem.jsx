import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/CarItem.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;
  console.log(props);
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car_item">
        <div className="car_img">
          <img src={imgUrl} alt="voiture" className="w-100" />
        </div>
        <div className="car_item-content mt-4">
          <h4
            className="section_title text-center"
            style={{ color: "#154360", fontSize: "1.3rem" }}
          >
            {carName}
          </h4>
          <h6 className="rent_price mt" style={{ fontSize: "1rem" }}>
            {price}.00 € <span>/Jour</span>
          </h6>
          <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line" style={{ fontSize: "1rem" }}>
                {model}
              </i>
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line" style={{ fontSize: "1rem" }}>
                {automatic}
              </i>
            </span>
            <span className=" d-flex align-items-center gap-2">
              <i className="ri-timer-flash-line" style={{ fontSize: "1rem" }}>
                {speed}
              </i>
            </span>
          </div>
          <button className=" w-50 car_item-btn car_btn-rent">
            <Link to={`/cars/${carName}`}>Louer</Link>
          </button>
          <button className=" w-50 car_item-btn car_btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
