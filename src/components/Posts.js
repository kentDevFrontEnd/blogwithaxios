import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Posts({ posts, loading, setContent }) {
  const tempPosts = [...posts];
  //  phai kiem tra duoc id, dung id thi moi show ra????
  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-10 mx-auto col-md-8">
          <ul className="list-group my-4">
            {tempPosts.map((post) => (
              <li key={post.id} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold text-capitalize config1line">
                    {post.title}
                  </p>
                  <Link to="/details">
                    <button
                      className="btn btn-info text-capitalize"
                      onClick={() => setContent(post.id)}
                    >
                      view more
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
