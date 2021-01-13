import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import Card from "../Card";
import Pagination from "../Pagination";

function Container() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(false);
  const [added, setAdded] = useState([]);
  useEffect(() => {
    API.getData().then(({ data }) => {
      setPosts(data);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(+posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container mt-5" id="photos">
        <div class="row mt-3">
          {currentPosts &&
            currentPosts.map(({ id, title, url, thumbnailUrl }) => {
              return (
                <div class="col-6 col-md-4 mt-3">
                  <Card
                    id={id}
                    title={title}
                    url={url}
                    thumbnailUrl={thumbnailUrl}
                    status={status}
                    setStatus={setStatus}
                    setAdded={setAdded}
                    added={added}
                  />
                </div>
              );
            })}
        </div>
        <Pagination pageNumbers={pageNumbers} paginate={paginate} />
      </div>
    </>
  );
}

export default Container;
