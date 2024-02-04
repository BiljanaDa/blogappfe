import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export default function Pagination({ total, count, perPage }) {
  const query = useQuery();
  // const location = useLocation();
  // const getPage = () =>new URLSearchParams(location.search);
  const getTotalPages = () => Math.ceil(total / perPage);

  function renderButtons() {
    const elements = [];
    for (let i = 1; i <= getTotalPages(); i++) {
      elements.push(
        <li className="page-item">
          <Link to={`/posts/?page=${i}`} className="page-link">
            {i}
          </Link>
        </li>
      );
    }
    return elements;
  }

  const next = () => {
    let nextPage = Number(query.get("page")) + 1;
    if (nextPage > getTotalPages()) nextPage--;
    return `/posts/?page=${nextPage}`;
  };

  const prev = () => {
    let nextPage = Number(query.get("page")) - 1;
    if (nextPage <= 0) nextPage = 1;
    return `/posts/?page=${nextPage}`;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link to={prev()} className="page-link">
            Previous
          </Link>
        </li>
        {renderButtons()}
        <li className="page-item">
          <Link to={next()} className="page-link">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
