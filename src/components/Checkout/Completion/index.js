import React from "react";

function Completion({ stageValue, setStageValue }) {
  console.log(stageValue);
  return (
    <>
      <button
        type="btn"
        className="btn btn-success"
        onClick={() => {
          stageValue === "Cart" && setStageValue("Billing");
          stageValue === "Billing" && setStageValue("Shipping");
          stageValue === "Shipping" && setStageValue("Review");
          stageValue === "Review" && setStageValue("Confirmation");
        }}
      >
        {stageValue !== "Confirmation" ? "Next!" : "Complete Order!"}
      </button>
    </>
  );
}

export default Completion;
