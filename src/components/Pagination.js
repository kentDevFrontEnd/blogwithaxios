import React from "react";

export default function Pagination({ postPerPage, totalPost, setPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="row mb-5">
      <div className="col-10 mx-auto col-md-8 text-center">
        <nav>
          <ul className="pagination justify-content-center">
            {pages.map((page) => (
              <li key={page}>
                <span
                  role="button"
                  className="page-link"
                  onClick={() => setPage(page)}
                >
                  {page}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
