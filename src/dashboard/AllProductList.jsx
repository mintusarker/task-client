import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllProductList = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/product`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });


  //delete product
  const handleProductRemove = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("Product Deleted successfully", { duration: 500 });
      });
  };

  return (
    <div>
      <h3 className="text-xl bg-slate-900 text-white text-center my-6">
        Total Products : {products?.length}
      </h3>
      <div className="overflow-x-auto my-12">
        <table className="table">
          <thead>
            <tr className="text-red-800 text-lg">
              <th></th>
              <th>Product</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Details</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product?.image} alt="shopping item" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{product?.brand}</td>
                <td>{product?.category}</td>
                <td>{product?.price} tk</td>
                <td className="">{product?.detail} tk</td>

                <td>
                  <div className="flex flex-wrap justify-center items-center">
                    <button
                      onClick={() => handleProductRemove(product?._id)}
                      className="btn btn-sm m-4 px-5 btn-warning"
                    >
                      Delete
                    </button>
                  </div>
                </td>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductList;
