import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import axios from "axios";
import axiosInstance from "../network/axiosInstance";
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/products", {
        params: {
          limit: 5,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col my-4">
            <ProductCard item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
