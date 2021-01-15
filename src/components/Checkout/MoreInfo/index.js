import React, { useMemo, useState } from "react";
import Pagination from "../../Home/Pagination";
import "./styles.css";
function MoreInfo({
  moreInfo,
  setMoreInfo,
  description,
  photos,
  open,
  setOpen,
}) {
  photos = photos || [];
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
      {open === true && (
        <div class="more-info-modal">
          <div class="more-info-modal-content">
            <span class="close" onClick={() => setOpen(false)}>
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
