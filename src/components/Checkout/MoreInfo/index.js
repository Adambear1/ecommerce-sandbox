import React, { useMemo, useState } from "react";
import { descriptions } from "../../../utils";
import API from "../../../utils/API";
import Pagination from "../../Home/Pagination";
import "./styles.css";
function MoreInfo({ moreInfo, setMoreInfo }) {
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
  useMemo(() => {
    if (moreInfo) {
      API.getPictures(moreInfo).then(({ data }) => {
        console.log(data);
        const { results } = data;
        setPhotos(results);
      });
      setDescription(
        descriptions[0][moreInfo][
          Math.floor(Math.random() * descriptions[0][moreInfo].length)
        ]
      );
    }
  }, []);
  console.log(photos);
  console.log(description);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(+photos.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {moreInfo !== false && (
        <div class="more-info-modal">
          <div class="more-info-modal-content">
            <span class="close" onClick={() => setMoreInfo(false)}>
              &times;
            </span>
            <div className="container ">
              <h1>{moreInfo}</h1>
              <div class="row">
                {currentPhotos &&
                  currentPhotos.map((item) => (
                    <>
                      <div class="col-4 mb-0">
                        <img
                          src={item.urls.regular}
                          alt={item.alt_description}
                          class="img-thumbnail"
                        />
                      </div>
                    </>
                  ))}
              </div>
              <p class="mt-3">{description && description}</p>
              <Pagination pageNumbers={pageNumbers} paginate={paginate} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoreInfo;
