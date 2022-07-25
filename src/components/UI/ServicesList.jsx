import React from "react";
import "../../styles/ServicesList.css";
import "../../assets/data/serviceData";
import serviceData from "../../assets/data/serviceData";
import { Col } from "reactstrap";

const ServicesList = () => {
  return (
    <>
      {serviceData.map((item) => {
        return <ServiceItem item={item} key={item.id} />;
      })}
    </>
  );
};

const ServiceItem = ({ item }) => {
  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service_item ">
        <span className="mb-3 d-inline-block">
          <i className={item.icon} />
        </span>
        <h6>{item.title}</h6>
        <p className="section_description">{item.desc}</p>
      </div>
    </Col>
  );
};

export default ServicesList;
