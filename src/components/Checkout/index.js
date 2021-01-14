import React, { useState } from "react";
import { numberToUSD } from "../../utils";
import Card from "./Card";
import "./styles.css";
function Checkout({ open, setOpen, posts, added, setAdded }) {
  const [total, setTotal] = useState([]);
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
                posts.map(({ title, thumbnailUrl, price }, index) => {
                  return (
                    added.includes(JSON.stringify(index + 1)) && (
                      <>
                        <Card
                          title={title}
                          thumbnailUrl={thumbnailUrl}
                          price={price}
                          setAdded={setAdded}
                          added={added}
                          id={index + 1}
                          total={total}
                          setTotal={setTotal}
                        />
                      </>
                    )
                  );
                })}
            </p>
            <h3>Total: {JSON.stringify(total)}</h3>
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
