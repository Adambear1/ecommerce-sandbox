import React from "react";
import { numberToUSD } from "../../../utils";

import "./styles.css";
function Card({
  id,
  url,
  thumbnailUrl,
  setAdded,
  added,
  price,
  promotion,
  country,
  duration,
  group,
}) {
  return (
    <div class="card" style={{ width: "18rem" }} key={id} id={id}>
      {promotion && (
        <div class="rightCircle">
          <h2 class="mt-3">Sale!</h2>
        </div>
      )}
      <a href={url} target="_blank">
        <img
          class="card-img-top"
          src={thumbnailUrl}
          alt="Card image cap"
          target="_blank"
        />
      </a>
      <div class="card-body">
        <h4 class="card-body">{country}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mollis laoreet enim, sit amet ullamcorper ipsum porta in. Cras et
          vulputate dui. Donec mattis lorem eu semper blandit. Nam nec interdum
          mi, vitae euismod lacus. Ut iaculis tortor vel nulla condimentum, id
          maximus ligula viverra.
        </p>
        <ul>
          <li>
            <h4>{duration}</h4>
          </li>
          <li>
            {group == "Solo Travel" && (
              <i class="fas fa-user fa-2x" title={group}></i>
            )}
            {group == "Pair Travel" && (
              <i class="fas fa-user-friends fa-2x" title={group}></i>
            )}
            {group == "Small Group Travel" && (
              <i class="fas fa-users fa-2x" title={group}></i>
            )}
          </li>
        </ul>
        <p>{numberToUSD(price)}</p>
        {added.indexOf(JSON.stringify(id)) != -1 ? (
          <button
            type="button"
            class="btn btn-success"
            title="Item Already Added To Cart"
            onClick={() => {
              let newArr = added.filter((item) => {
                return +item !== +id;
              });
              setAdded(newArr);
            }}
          >
            <i class="fas fa-check"></i>
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-light"
            id={id}
            onMouseOver={(e) => {
              e.target.classList.remove("btn-light");
              e.target.classList.add("btn-success");
            }}
            onMouseOut={(e) => {
              e.target.classList.remove("btn-success");
              e.target.classList.add("btn-light");
            }}
            onClick={(e) => {
              setAdded([...added, e.target.id]);
            }}
          >
            Add to Cart!
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
