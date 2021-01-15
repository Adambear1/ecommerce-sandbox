import React, { useEffect, useState } from "react";
import { descriptions, numberToUSD } from "../../../utils";
import API from "../../../utils/API";
import MoreInfo from "../MoreInfo";
import "./styles.css";
function Card({
  thumbnailUrl,
  price,
  country,
  duration,
  promotion,
  group,
  setAdded,
  added,
  id,
}) {
  const [moreInfo, setMoreInfo] = useState(null);
  const [description, setDescription] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [open, setOpen] = useState(false);
  const renderMoreInfo = (name) => {
    console.log(name);
    if (name) {
      API.getPictures(name).then(({ data }) => {
        const { results } = data;
        setPhotos(results);
      });
      setDescription(
        descriptions[0][name][
          Math.floor(Math.random() * descriptions[0][name].length)
        ]
      );
      setMoreInfo(name);
    }
  };
  return (
    <div class="card checkout-card float-right">
      <MoreInfo
        open={open}
        setOpen={setOpen}
        moreInfo={moreInfo}
        setMoreInfo={setMoreInfo}
        description={description}
        photos={photos}
      />
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
            <small class="text-danger">
              {promotion && "This price wont last long!! "}
            </small>
            <br />
            <br />
            <a
              href="#"
              class="btn btn-danger btn-sm float-right mx-2 mb-2"
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
              class="btn btn-warning btn-sm float-right mx-2 mb-2"
              id={country}
              onClick={(e) => {
                renderMoreInfo(e.target.id);
                setOpen(true);
              }}
            >
              <i class="fas fa-question" id={country}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
