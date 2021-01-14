import React from "react";
import Form from "./Form";
import "./styles.css";
function Subscribe({ open, setOpen }) {
  return (
    <>
      {open === true && (
        <div class="subscribe-modal">
          <div class="subscribe-modal-content">
            <span class="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            <h1 className="mt-5">Become a Subscriber! Earn Rewards!</h1>
            <Form />
            <button type="btn" className="btn btn-light my-5">
              Subscribe!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Subscribe;
