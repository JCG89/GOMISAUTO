import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/Payement.css";

const Payment = () => {
  return (
    <>
      <div className="payement">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
          Payment par virement
        </label>
      </div>
      <div className="payement mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
          Payment par chéque
        </label>
      </div>
      <div className="payement mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
          Master Card
        </label>
        <img src={masterCard} alt="masterCard" />
      </div>
      <div className="payement mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" />
          Paypal
        </label>
        <img src={paypal} alt="pay" />
      </div>
      <div className="payement text-end mt-5">
        <button>Reservez maintenant</button>
      </div>
    </>
  );
};

export default Payment;
