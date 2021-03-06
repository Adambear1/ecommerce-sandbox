import React, { useState } from "react";
import "./styles.css";
function Cart({ added, open, setOpen, stageValue, setStageValue }) {
  return (
    <div
      class={added.length > 0 ? "icon" : "icon hide"}
      onClick={() => {
        setOpen(true);
        setStageValue("Cart");
      }}
    >
      <i class="fas fa-shopping-cart fa-5x"></i>
      <h1>{added.length}</h1>
    </div>
  );
}

export default Cart;
