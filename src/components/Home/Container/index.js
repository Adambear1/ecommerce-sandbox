import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import Checkout from "../../Checkout";
import Card from "../Card";
import Cart from "../Cart";
import Pagination from "../Pagination";

function Container() {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState([]);
  useEffect(() => {
    API.getData().then(({ data }) => {
      setPosts(data);
    });
  }, []);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  const [postsPerPage] = useState(6);
  // Pagination Consts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination New Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(+posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPosts);

  return (
    <>
      <div className="container mt-5" id="photos">
        <div class="row mt-3">
          <Cart added={added} open={open} setOpen={setOpen} />
          <Checkout
            open={open}
            setOpen={setOpen}
            posts={posts}
            added={added}
            setAdded={setAdded}
          />
          {currentPosts &&
            currentPosts.map(({ id, title, url, thumbnailUrl }) => {
              return (
                <div class="col-6 col-md-4 mt-3">
                  <Card
                    id={id}
                    title={title}
                    url={url}
                    thumbnailUrl={thumbnailUrl}
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
