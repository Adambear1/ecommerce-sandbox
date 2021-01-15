import React, { useState } from "react";
import Confetti from "react-confetti";
import Next from "./Next";
import "./styles.css";
import Cart from "./Cart";
import Billing from "./Billing";
import Review from "./Review";
import Shipping from "./Shipping";
import Confirmation from "./Confirmation";
import Back from "./Back";
function Checkout({
  open,
  setOpen,
  posts,
  added,
  setAdded,
  stageValue,
  setStageValue,
}) {
  let stage = {
    Cart: (
      <Cart
        posts={posts}
        added={added}
        setAdded={setAdded}
        setStageValue={setStageValue}
      />
    ),
    Billing: <Billing />,
    Shipping: <Shipping />,
    Review: <Review posts={posts} added={added} />,
    Confirmation: <Confirmation />,
  };

  return (
    <>
      {open === true && (
        <div className="checkout-modal">
          <div className="checkout-modal-content">
            <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            {stageValue === "Confirmation" && (
              <Confetti
                width={2000}
                height={1000}
                numberOfPieces={1000}
                wind={0.02}
              />
            )}
            {stage[stageValue]}
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Back
                    setStageValue={setStageValue}
                    stageValue={stageValue}
                    setOpen={setOpen}
                  />
                </div>
                <div className="col-6">
                  <Next setStageValue={setStageValue} stageValue={stageValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
