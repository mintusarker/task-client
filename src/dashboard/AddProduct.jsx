import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    console.log(data);
    const product = {
      brand: data.brand,
      category_id: data.categoryId.split("-")[0],
      category: data.category,
      title: data.title,
      price: parseInt(data.price),
      detail: data.detail,
      image: data.image,
      email: data.email
    };
    console.log(product);

    // save product information to database
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        toast.success("Product added successfully");
        reset();
        navigate("/dashboard/my-products");
      });
  };

  return (
    <div className="px-40">
      <h2 className="text-2xl mb-6">Add A Product</h2>

      <form
        className="grid lg:grid-cols-2 gap-7 w-full justify-items-center items-center"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-60"
            {...register("email")}
          />
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Product Brand Name</span>
          </label>
          <select
            className="select select-bordered w-60"
            {...register("brand", {
              required: "Product Brand name is required",
            })}
          >
            <option></option>
            <option>Nike</option>
            <option>Reebok</option>
            <option>Adidas</option>
            <option>Puma</option>
            <option>Bata</option>
            <option>Apex</option>
            <option>Vans</option>
            <option>Woodland</option>
            <option>Sketchers</option>
          </select>
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Product Category_ID</span>
          </label>
          <select
            className="select select-bordered w-60"
            {...register("categoryId", {
              required: "Category_Id is required",
            })}
          >
            <option></option>
            <option>01-Nike</option>
            <option>02-Reebok</option>
            <option>03-Adidas</option>
            <option>04-Puma</option>
            <option>05-Bata</option>
            <option>06-Apex</option>
            <option>07-Vans</option>
            <option>08-Woodland</option>
            <option>09-Sketchers</option>
          </select>
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <select
            className="select select-bordered w-60"
            {...register("category", {
              required: "Category Name is required",
            })}
          >
            <option></option>
            <option>Child</option>
            <option>Men</option>
            <option>Women</option>
          </select>
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Product Title</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-60"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors.price && (
            <p className="text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-60"
            {...register("price", {
              required: "Price is required",
            })}
          />
          {errors.price && (
            <p className="text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Product Detail</span>
          </label>
          <textarea
            type="text"
            className="input input-bordered w-60 h-24"
            {...register("detail", {
              required: "Description is required",
            })}
          />
          {errors.detail && (
            <p className="text-red-600">{errors.detail.message}</p>
          )}
        </div>

        <div className="form-control w-60">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <textarea
            type="text"
            className="input input-bordered w-60 h-24"
            {...register("image", {
              required: "Photo is required",
            })}
          />
          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}
        </div>

        <input
          className="btn btn-info text-white text-lg my-3 w-60"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
