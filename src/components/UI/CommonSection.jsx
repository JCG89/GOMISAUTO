import React from "react";
import { Container } from "reactstrap";
import "../../styles/CommonSection.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common_section">
      <Container className="text-center">
        <h3 className="text-light">{title}</h3>
      </Container>
    </section>
  );
};

export default CommonSection;
