import React, { useState } from "react";
import ShippingBilling from "./../ShippingBilling";

function Completion() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ShippingBilling open={open} setOpen={setOpen} />
      <button
        type="btn"
        className="btn btn-success"
        onClick={() => setOpen(true)}
      >
        Check Out!
      </button>
    </>
  );
}

export default Completion;
