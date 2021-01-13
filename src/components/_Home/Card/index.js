import React from "react";
import "./styles.css";
function Card({
  id,
  title,
  url,
  thumbnailUrl,
  status,
  setAdded,
  added,
  setStatus,
}) {
  return (
    <div class="card" style={{ width: "18rem" }} key={id} id={id}>
      <a href={url} target="_blank">
        <img
          class="card-img-top"
          src={thumbnailUrl}
          alt="Card image cap"
          target="_blank"
        />
      </a>
      <div class="card-body">
        <p class="card-body">{title}</p>
        {status ? (
          <button
            type="button"
            class="btn btn-success"
            title="Item Already Added To Cart"
            disabled={true}
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
              setStatus(true);
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
