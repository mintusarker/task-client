import React from "react";
import "./Banner.css";

import img3 from '../../assets/piiicc.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="lg:pb-5">
      <div
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-banner flex justify-center items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="text-center text-white bg-slate-700 bg-opacity-40 p-8 rounded"
          >
            <h2 className="text-3xl mb-3 leading-8">CARING FOR LIFE</h2>
            <p className="text-lg">Leading the way in shopping Excellence</p>
          </div>
        </div>
      </div>
    </div>

    <Link className="flex items-center justify-center mt-20 skeleton btn btn-md btn-accent w-28 mx-auto rounded text-xl" to='/shop'>Shopping</Link>
    </div>
  );
};

export default Banner;
