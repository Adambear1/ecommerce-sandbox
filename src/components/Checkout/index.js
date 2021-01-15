import React, { useState } from "react";

import Completion from "./Completion";
import "./styles.css";
import Cart from "./Cart";
import Billing from "./Billing";
import Review from "./Review";
function Checkout({ open, setOpen, posts, added, setAdded }) {
  const [stageValue, setStageValue] = useState("Cart");
  const [stage, setStage] = useState({
    Cart: (
      <Cart
        posts={posts}
        added={added}
        setAdded={setAdded}
        setStageValue={setStageValue}
      />
    ),
    Billing: <Billing />,
    Review: <Review />,
  });
  return (
    <>
      {open === true && (
        <div class="checkout-modal">
          <div class="checkout-modal-content">
            <span class="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            {stage[stageValue]}
            <Completion setStageValue={setStageValue} stageValue={stageValue} />
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
