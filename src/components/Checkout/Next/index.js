import React, { useState } from "react";

import "./styles.css";
function Next({ stageValue, setStageValue }) {
  return (
    <>
      {stageValue !== "Confirmation" && (
        <div className="my-5">
          <button
            type="btn"
            className={
              stageValue === "Cart"
                ? "btn btn-success w-100 next-btn"
                : "btn btn-success w-100"
            }
            onClick={() => {
              stageValue === "Cart" && setStageValue("Billing");
              stageValue === "Billing" && setStageValue("Shipping");
              stageValue === "Shipping" && setStageValue("Review");
              stageValue === "Review" && setStageValue("Confirmation");
            }}
          >
            {stageValue === "Review" ? "Confirm!" : "Next!"}
          </button>
        </div>
      )}
    </>
  );
}

export default Next;
