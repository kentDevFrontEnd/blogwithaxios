import React from "react";

export default function PostPerPage({ choosePostPerPage }) {
  return (
    <div className="row justify-content-end">
      <div className="col-1">
        <select
          onChange={(e) => choosePostPerPage(e)}
          className="custom-select"
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}
