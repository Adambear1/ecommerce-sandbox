import React from "react";
import Form from "./Form";

function ShippingBilling({ open, setOpen }) {
  return (
    <>
      <div class="shipping-billing-modal">
        <div class="shipping-billing-modal-content">
          <span class="close" onClick={() => setOpen(false)}>
            &times;
          </span>
          <Form />
        </div>
      </div>
    </>
  );
}

export default ShippingBilling;
