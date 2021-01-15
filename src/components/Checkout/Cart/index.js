import React from "react";
import Card from "../Card";
import { numberToUSD } from "../../../utils";

function Cart({ posts, added, setAdded }) {
  let total = [];
  return (
    <>
      <h3 className="mt-5">Checkout</h3>
      <p className="mt-3">
        {posts &&
          posts.map(
            (
              {
                title,
                thumbnailUrl,
                price,
                country,
                promotion,
                duration,
                group,
              },
              index
            ) => {
              if (added.includes(JSON.stringify(index + 1))) {
                total.push(price);
                return (
                  <>
                    <Card
                      title={title}
                      thumbnailUrl={thumbnailUrl}
                      price={price}
                      country={country}
                      promotion={promotion}
                      duration={duration}
                      group={group}
                      setAdded={setAdded}
                      added={added}
                      id={index + 1}
                    />
                  </>
                );
              }
            }
          )}
      </p>
      <h3>Total: {numberToUSD(total.reduce((a, b) => a + b, 0))}</h3>
    </>
  );
}

export default Cart;
