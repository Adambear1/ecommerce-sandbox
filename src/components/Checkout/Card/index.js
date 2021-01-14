import React from "react";
import "./styles.css";
function Card({ title, thumbnailUrl, setAdded, added, id }) {
  return (
    <div class="card checkout-card float-right">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" src={thumbnailUrl} alt="" />
        </div>
        <div class="col-sm-7">
          <div class="card-block">
            <p>{title}</p>
            <a
              href="#"
              class="btn btn-danger btn-sm float-right"
              id={id}
              onClick={() => {
                let newArr = added.filter((item) => {
                  console.log(item);
                  console.log(id);
                  return +item !== +id;
                });
                setAdded(newArr);
              }}
            >
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
