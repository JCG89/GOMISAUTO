import React from "react";
import "../../styles/BookingForm.css";
import Payment from "./Payment";

import { Form, FormGroup } from "reactstrap";
const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Prenom" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Nom" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Tél:" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder=" Adresse de départ" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder=" Addresse d'arrivé " />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 persone">1 persone</option>
          <option value="2 persones">2persones</option>
          <option value="3 person">3 persones</option>
          <option value="4 person">4 persones</option>
          <option value="5+ person">5+ persones</option>
        </select>
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 bagage">1 bagage</option>
          <option value="2 bagages">2 bagages</option>
          <option value="3 bagages">3 bagages</option>
          <option value="4 bagages">4 bagages</option>
          <option value="5+ bagages">5+ bagages</option>
        </select>
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Jour du voyage" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Durée du trajet"
          className="time_picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Texte"
        ></textarea>
      </FormGroup>
      <Payment />
    </Form>
  );
};

export default BookingForm;
