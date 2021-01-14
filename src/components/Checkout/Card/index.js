import React, { useEffect, useState } from "react";
import { numberToUSD } from "../../../utils";
import MoreInfo from "../MoreInfo";
import "./styles.css";
function Card({
  thumbnailUrl,
  price,
  country,
  duration,
  group,
  setAdded,
  added,
  id,
}) {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div class="card checkout-card float-right">
      <MoreInfo moreInfo={moreInfo} setMoreInfo={setMoreInfo} />
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" src={thumbnailUrl} alt="" />
        </div>
        <div class="col-sm-7">
          <div class="card-block">
            <p>
              {group === "Solo Travel"
                ? `You will be traveling to ${country} for ${duration} by yourself.`
                : `You will be traveling to ${country} for ${duration} in a ${group}`}
            </p>
            <p>{numberToUSD(price)}</p>
            <a
              href="#"
              class="btn btn-danger btn-sm float-right mx-2"
              id={id}
              onClick={() => {
                let newArr = added.filter((item) => {
                  return +item !== +id;
                });
                setAdded(newArr);
              }}
            >
              <i class="fas fa-trash-alt"></i>
            </a>
            <a
              href="#"
              class="btn btn-warning btn-sm float-right mx-2"
              id={id}
              onClick={() => {
                setMoreInfo(country);
              }}
            >
              <i class="fas fa-question"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
