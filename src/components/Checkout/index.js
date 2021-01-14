import React from "react";
import Card from "./Card";
import "./styles.css";
function Checkout({ open, setOpen, posts, added, setAdded }) {
  console.log(open);
  return (
    <>
      {open === true && (
        <div class="checkout-modal">
          <div class="checkout-modal-content">
            <span class="close" onClick={setOpen(false)}>
              &times;
            </span>
            <p>
              {posts &&
                posts.map(({ title, thumbnailUrl }, index) => {
                  return (
                    added.includes(JSON.stringify(index)) && (
                      <Card title={title} thumbnailUrl={thumbnailUrl} />
                    )
                  );
                })}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
