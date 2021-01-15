import React from "react";
import { numberToUSD } from "../../../utils";

function Review({ posts, added }) {
  let total = [];
  return (
    <>
      <h1>Review</h1>
      {posts &&
        posts.map(
          (
            { title, thumbnailUrl, price, country, promotion, duration, group },
            index
          ) => {
            if (added.includes(JSON.stringify(index + 1))) {
              total.push(price);
              return (
                <>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="mb-0">{country}</h5>
                      <p class={promotion ? "text-success mb-0" : "mb-0"}>
                        {numberToUSD(price)}
                      </p>
                      <p class="mb-0">{duration}</p>
                      <p class="mb-0">{group}</p>
                    </div>
                  </div>
                </>
              );
            }
          }
        )}

      <h3 class="mt-5">
        Total: {numberToUSD(total.reduce((a, b) => a + b, 0))}
      </h3>
    </>
  );
}

export default Review;
