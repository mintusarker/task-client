import React from 'react';
import Navbar from '../componant/share/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../componant/share/Footer';

const Dashboard = () => {
    return (
        <div>
      <Navbar></Navbar>
      <div className="drawer md:drawer-open lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* outlet */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-screen bg-slate-300 text-base-content flex flex-col">
            {/* Sidebar content here */}
            <div className="text-lg mt-14">
              <li className="bg-sky-700 text-white">
                <Link to={"/dashboard/my-products"}>Mangae All Products</Link>
              </li>
              <li className="bg-sky-700 text-white my-5">
                <Link to={"/dashboard/add-product"}>Add Product</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Dashboard;

