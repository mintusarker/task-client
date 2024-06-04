import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h3 className="text-center mt-10 text-xl">All products</h3>
      <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-14 my-24">
        {products?.map((product) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
