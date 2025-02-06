import React from "react";
import "./index.css";
export const Modal = ({ closeModal, acceptedOffer }) => {

    const handleCloseOutSide=(e)=>{
        // console.log(e.target.className);
        if(e.target.className==="modal"){
            closeModal();
        }
    }
  return (

    <div className="modal" onClick={handleCloseOutSide}>
      <div className="modal-container">
        <button onClick={() => closeModal()} className="btn1">
          X
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consectetur alias vitae excepturi blanditiis aliquid dolor sit
          voluptatibus soluta rem.
        </p>
        <button onClick={()=>acceptedOffer()} className="btn2">Accept Offer</button>
      </div>
    </div>
  );
};
