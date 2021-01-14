import React from "react";
import "./styles.css";
function Card({ title, thumbnailUrl }) {
  return (
    <div class="card checkout-card float-right">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" src={thumbnailUrl} alt="" />
        </div>
        <div class="col-sm-7">
          <div class="card-block">
            <p>{title}</p>

            <br />
            <a href="#" class="btn btn-primary btn-sm float-right">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
