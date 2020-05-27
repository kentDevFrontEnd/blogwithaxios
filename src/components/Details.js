import React from "react";
import { Link } from "react-router-dom";

export default function Details({ detailPost }) {
  return (
    <div className="card my-4">
      <h3 className="card-header">{detailPost.title}</h3>
      <p className="card-body">{detailPost.body}</p>
      <Link to="/" className="card-footer">
        <button className="btn btn-primary text-capitalize">
          Back to home
        </button>
      </Link>
    </div>
  );
}
