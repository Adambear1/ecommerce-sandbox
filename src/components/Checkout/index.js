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
            <span class="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            <h3 className="mt-5">Checkout</h3>
            <p className="mt-3">
              {posts &&
                posts.map(({ title, thumbnailUrl }, index) => {
                  return (
                    added.includes(JSON.stringify(index + 1)) && (
                      <Card
                        title={title}
                        thumbnailUrl={thumbnailUrl}
                        setAdded={setAdded}
                        added={added}
                        id={index + 1}
                      />
                    )
                  );
                })}
            </p>
            <button type="btn" className="btn btn-success">
              Order!
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
