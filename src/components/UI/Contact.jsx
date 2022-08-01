import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import { Link } from "react-router-dom";
import CommonSection from "./CommonSection";
import "../../styles/Contact.css";

const Contact = () => {
  const socialLinks = [
    {
      url: "#",
      icon: "ri-facebook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];

  return (
    <Helmet title="Contact">
      <CommonSection title="Contactez-nous" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mt-5">FORMULAIRE DE CONTACT</h6>
              <Form>
                <FormGroup className="contact_form mt-5">
                  <Input type="text" placeholder="Votre Nom" />
                </FormGroup>
                <FormGroup className="contact_form">
                  <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup className="contact_form">
                  <textarea
                    rows="10"
                    placeholder="Message"
                    className="w-100 py-2 px-3"
                  ></textarea>
                </FormGroup>
                <button className="btn contact_btn" type="submit">
                  Envoyer
                </button>
              </Form>
            </Col>
            <Col lg="5" md="5">
              <div className="contact_info gap-4">
                <h6 className="fw-bold mt-4">NOS CONTACTS</h6>
                <p className="section_description ">
                  {" "}
                  14 Avenue de la République, 94500 Champigny Sur Marne
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Tél:</h6>
                  <p className="section_description mb-0"> 06 21 45 60 56</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section_description mb-0">
                    {" "}
                    christopheGomis89@gmail.com
                  </p>
                </div>
                <h6 className="fw-bold mt-4">
                  Suivez-nous sur les réseaux sociaux
                </h6>
                <div className="social_icon d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((link, index) => {
                    return (
                      <Link to={link.url} key={index} className="social_icon">
                        <i className={link.icon}></i>{" "}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
