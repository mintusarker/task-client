import React from 'react';
import toast from 'react-hot-toast';

const SingleProduct = ({product}) => {


    const handlePayment =()=> {
        toast.error(`Payment method not implement for ${product?.title} right now!!`, {duration: 1000})
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-full h-44' src={product?.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product?.title} for {product?.category}</h2>
          <p>Brand: {product?.brand}</p>
          <p>Price: {product?.price} $</p>
          <p>{}</p>
          <div className="card-actions justify-end">
            <button onClick={handlePayment} className="btn btn-info btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;