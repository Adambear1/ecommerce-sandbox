import React, { useState, useEffect } from "react";
import { countryArr, durationArr, groupArr, priceArr } from "../../../utils";
import API from "../../../utils/API";
import Checkout from "../../Checkout";
import Card from "../Card";
import Cart from "../Cart";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";

function Container() {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    API.getData().then(({ data }) => {
      console.log(priceArr[Math.floor(Math.random() * priceArr.length)]);
      let newData = data.map((item) => {
        item.price = priceArr[Math.floor(Math.random() * priceArr.length)];
        item.country =
          countryArr[Math.floor(Math.random() * countryArr.length)];
        item.duration =
          durationArr[Math.floor(Math.random() * durationArr.length)];
        item.group = groupArr[Math.floor(Math.random() * groupArr.length)];
        return item;
      });
      setPosts(newData);
    });
  }, []);
  useEffect(() => {
    if (search.length > 0) {
      let newArr = posts.filter(({ country }, index) => {
        return country.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      setFilteredPosts(newArr);
    }
  }, [search]);

  const [posts, setPosts] = useState([]);
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
          <SearchBar setSearch={setSearch} />
          <Cart added={added} open={open} setOpen={setOpen} />
          <Checkout
            open={open}
            setOpen={setOpen}
            posts={posts}
            added={added}
            setAdded={setAdded}
          />
          {search === ""
            ? currentPosts.map(
                ({
                  id,
                  title,
                  url,
                  thumbnailUrl,
                  price,
                  country,
                  duration,
                  group,
                }) => {
                  return (
                    <div class="col-6 col-md-4 mt-3">
                      <Card
                        id={id}
                        title={title}
                        url={url}
                        price={price}
                        country={country}
                        duration={duration}
                        group={group}
                        thumbnailUrl={thumbnailUrl}
                        setAdded={setAdded}
                        added={added}
                      />
                    </div>
                  );
                }
              )
            : filteredPosts.map(
                ({
                  id,
                  title,
                  url,
                  thumbnailUrl,
                  price,
                  country,
                  duration,
                  group,
                }) => {
                  return (
                    <div class="col-6 col-md-4 mt-3">
                      <Card
                        id={id}
                        title={title}
                        url={url}
                        price={price}
                        country={country}
                        duration={duration}
                        group={group}
                        thumbnailUrl={thumbnailUrl}
                        setAdded={setAdded}
                        added={added}
                      />
                    </div>
                  );
                }
              )}
        </div>
        {!search && (
          <Pagination pageNumbers={pageNumbers} paginate={paginate} />
        )}
      </div>
    </>
  );
}

export default Container;
