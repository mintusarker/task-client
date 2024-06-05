import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const data = useLoaderData();
  console.log(data[0].title);
  const navigate = useNavigate();

  //update product
  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const detail = form.detail.value;
    const image = form.image.value;

    const updateProduct = {
      title,
      brand,
      price,
      detail,
      image,
    };

    console.log(updateProduct);

    fetch(`http://localhost:5000/products/${data[0]?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("product updated");
          navigate("/dashboard/my-products");
          console.log(data);
        }
      });
  };

  return (
    <div className="my-32 border w-1/2 p-4 mx-auto">
      <h2 className="text-center text-rose-600 mb-3 font-semibold text-xl">
        Update product:{" "}
      </h2>
      <form onSubmit={handleUpdateUser} className="flex flex-col">
        {/* <label htmlFor="">Email</label>
        <input
          className="border border-black  w-full p-2 mb-4"
          // onChange={handleInputChange}
          defaultValue={data[0]?.email}
          disabled
          type="text"
          name="title"
          placeholder="Title"
          required
        /> */}
        <label htmlFor="">Brand</label>
        <input
          className="border border-black  w-full p-2 mb-4"
          defaultValue={data[0]?.brand}
          type="text"
          name="brand"
          placeholder="Title"
          required
        />
        <label htmlFor="">Title</label>
        <input
          className="border border-black  w-full p-2 mb-4"
          defaultValue={data[0]?.title}
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        {/* <label htmlFor="">Title</label>
        <input
          className="border border-black  w-full p-2 mb-4"
          defaultValue={data[0]?.title}
          type="text"
          name="title"
          placeholder="Title"
          required
        /> */}
        {/* <label className="" htmlFor="">
          Brand
        </label>
        <input
          className="border border-stone-500 w-full p-2 mb-4"
          defaultValue={data[0]?.brand}
          type="text"
          name="brand"
          placeholder="Brand"
          required
        /> */}
        <label htmlFor="">Price</label>
        <input
          className="border border-stone-500 w-full p-2 mb-4"
          defaultValue={data[0]?.price}
          type="text"
          name="price"
          placeholder="price"
          required
        />
        <label htmlFor="">Detail</label>
        <textarea
          type="text"
          className="border border-stone-500 w-full h-24 p-2"
          name="detail"
          defaultValue={data[0]?.detail}
        />

        <label htmlFor="">Image Url</label>
        <textarea
          type="text"
          className="border border-stone-500 w-full p-2 h-32"
          name="image"
          defaultValue={data[0]?.image}
          required
        />

        <br />
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
