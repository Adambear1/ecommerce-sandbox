import React from "react";
import "./styles.css";
function Back({ stageValue, setStageValue, setOpen }) {
  return (
    <>
      {stageValue !== "Cart" && (
        <div className="my-5">
          <button
            type="btn"
            className={
              stageValue === "Confirmation"
                ? "btn btn-danger w-100 back-btn "
                : "btn btn-danger w-100"
            }
            onClick={() => {
              stageValue === "Billing" && setStageValue("Cart");
              stageValue === "Shipping" && setStageValue("Billing");
              stageValue === "Review" && setStageValue("Shipping");
              stageValue === "Confirmation" && setOpen(false);
            }}
          >
            {stageValue !== "Confirmation" ? "Back!" : "Close!"}
          </button>
        </div>
      )}
    </>
  );
}
export default Back;
