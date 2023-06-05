import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  return (
    <>
      <div className="card h-100">
        <img
          className="card-img-top"
          src={props.item.image}
          alt={props.item.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.description}</p>
          <Link to={`/products/${props.item.id}`} className="btn btn-primary">
            Go To Details
          </Link>
        </div>
      </div>
    </>
  );
};
