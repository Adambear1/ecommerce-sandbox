import React from "react";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

function _Home({ posts, added, setAdded }) {
  console.log(posts);
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Container posts={posts} added={added} setAdded={setAdded} />
    </>
  );
}

export default _Home;
