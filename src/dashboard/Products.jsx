import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Products = ({ product, handleDeleteProduct }) => {
  const navigate = useNavigate();
  console.log(product);

  return (
    <div className="border bg-base-100 shadow-xl">
      <figure>
        <img className="h-40 w-full" src={product?.image} alt="" />
      </figure>
      <div className="p-5 card-body">
        <h2 className="card-title">Brand: {product?.brand}</h2>
        <p>Title: {product?.title}</p>
        <p>category: {product?.category}</p>
        <p>Price: {product?.price} $</p>
        <p className="text-justify">Description: {product?.detail}</p>
        <div className="flex justify-between">
          <button
            onClick={() => handleDeleteProduct(product?._id)}
            className="btn btn-sm btn-warning"
          >
            Delete
          </button>
          <Link to={`/dashboard/update-product/${product?._id}`}>
            <button className="btn btn-sm btn-error">Update</button>
          </Link>
        </div>
      </div>
    </div>

   
  );
};

export default Products;
