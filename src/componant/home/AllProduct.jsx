import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { AuthContext } from "../../auth/AuthProvider";

const AllProduct = () => {
  
  const { loading} = useContext(AuthContext);
  
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

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

  const handleAllItems =()=> {
    setProducts(items)
  }

if(loading){
  return <span className="loading loading-ring loading-md"></span>
}


  return (
    <div>
      <h3 className="text-center mt-10 text-xl">All products</h3>
      <div className="text-center flex justify-center gap-12 mt-7">
      <button onClick={handleChildDress} className="btn btn-sm btn-neutral w-20">Child</button>
      <button onClick={handleMenDress} className="btn btn-sm btn-neutral w-20">Men</button>
      <button onClick={handleWomenDress} className="btn btn-sm btn-neutral w-20">Women</button>
      <button onClick={handleAllItems} className="btn btn-sm btn-neutral w-20">All Item</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-14 my-16">
        {products?.map((product) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
