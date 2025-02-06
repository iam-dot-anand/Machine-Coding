import React, { useState } from "react";
import "./index.css";
import { Modal } from "./modal";

const ModelComponent = () => {
  const [show, setShow] = useState(false);
  const [acceoptOffer, setAcceoptOffer] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  const acceptedOffer = () => {
    setAcceoptOffer(true);
    setShow(false);
  };
  return (
    <div>
     
        <div className="modal-component">
          {!acceoptOffer && <button onClick={() => openModal()}>Show Offer</button>}
          {acceoptOffer && <h1>Offer Accepted</h1>}
          {show && <Modal closeModal={closeModal} acceptedOffer={acceptedOffer} /> }
        </div>
     
    </div>
  );
};
export default ModelComponent;
