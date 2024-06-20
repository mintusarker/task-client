import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import SingleProduct from "./SingleProduct";

const Shop = () => {
  const { loading } = useContext(AuthContext);

  const [items, setItems] = useState([]);
  console.log(items);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(" https://task-final-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  //search
  const handleOnChange = async (event) => {
    let key = event.target.value;
    console.log(key);
    fetch(`https://task-final-server.vercel.app/search/${key}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  //filter
  const handleMenDress = () => {
    const filter = items.filter((prod) => prod.category == "Men");
    setProducts(filter);
  };
  const handleWomenDress = () => {
    const filter = items.filter((prod) => prod.category == "Women");
    setProducts(filter);
  };

  const handleChildDress = () => {
    const filter = items.filter((prod) => prod.category == "Child");
    setProducts(filter);
  };

  const handleAllItems = () => {
    setProducts(items);
  };

  if (loading) {
    return <span className="loading loading-ring loading-md"></span>;
  }

  return (
    <div>
      {/* <h3 className="text-center mt-10 text-xl">All products</h3> */}

      <input
        onChange={handleOnChange}
        placeholder="search your product"
        type="search"
        className="border border-slate-400 w-72 h-10 my-9 outline-none justify-center flex mx-auto px-9 py-2 mt-6 rounded-full"
      />

      <div className="text-center flex flex-wrap justify-center gap-5 mt-7">
        <button
          onClick={handleChildDress}
          className="btn btn-sm btn-neutral w-20"
        >
          Child
        </button>
        <button
          onClick={handleMenDress}
          className="btn btn-sm btn-neutral w-20"
        >
          Men
        </button>
        <button
          onClick={handleWomenDress}
          className="btn btn-sm btn-neutral w-20"
        >
          Women
        </button>
        <button
          onClick={() => handleAllItems()}
          className="btn btn-sm btn-neutral w-20"
        >
          All Item
        </button>
      </div>
      <div className="grid gap-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-24 my-16">
        {products?.map((product) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Shop;
