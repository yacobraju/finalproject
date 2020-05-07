import React from "react";

const Book = props => {
  return (
    <div className="container">
      <div className="row shadow mb-3 mt-5">
        <div className="col-4 pl-0">
          <img src={props.book.url} />
        </div>
        <div className="col-8">
          <h4 className="text-danger">{props.book.title}</h4>
          <h5 className="text-dark">
            Authors: {props.book.authors} | Category: {props.book.category} |
            Published Date: {props.book.publishedDate}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Book;
