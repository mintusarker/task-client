import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Products = ({ product, handleDeleteProduct }) => {
  const navigate = useNavigate();
  console.log(product);

  return (
    <div>
      <div className="border bg-base-100 shadow-xl">
        <figure>
          <img className="h-40 w-full" src={product?.image} alt="" />
        </figure>
        <div className="p-5">
          <h2 className="card-title">{product?.name}</h2>
          <p>Price: {product?.price}</p>
          <p>Description: {product?.detail}</p>
          <div className="card-actions inline-grid">
            <button
              onClick={() => handleDeleteProduct(product?._id)}
              className="btn btn-sm btn-primary"
            >
              Delete
            </button>
            {/* <button className="btn btn-sm btn-primary">Available</button> */}
           <Link to={'/'}> <button  className="btn btn-sm btn-primary">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
