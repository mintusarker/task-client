import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Products from "./Products";
import { AuthContext } from "../auth/AuthProvider";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);

  console.log(user?.email);

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://task-final-server.vercel.app/products?email=${user?.email}`
        );
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  //delete product
  const handleDeleteProduct = (id) => {
    fetch(`https://task-final-server.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Product deleted successfully");
        }
      });
  };

  return (
    <div className="">
      <h2 className="text-2xl pl-5 my-5">My Products: {products?.length}</h2>
      <div className="gap-5 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product) => (
          <Products
            key={product._id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          ></Products>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
