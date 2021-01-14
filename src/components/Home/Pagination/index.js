import React, { useEffect, useState } from "react";

const Pagination = ({ pageNumbers, paginate }) => {
  return (
    <nav class="d-flex justify-content-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" style={{ cursor: "pointer" }}>
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
