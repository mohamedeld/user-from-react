import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
export const ProductDetails = () => {
  const [pDetail, setPDetail] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setPDetail(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="card my-5">
        <img
          className="card-img-top"
          src={pDetail.image}
          alt={pDetail.title}
          style={{ height: "600px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{pDetail.title}</h5>
          <p className="card-text">{pDetail.description}</p>
          <p className="card-text">
            <small className="text-muted">{pDetail.price} $</small>
          </p>
          <button
            onClick={() => navigate("/products")}
            className="btn btn-primary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
