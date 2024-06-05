import React, { useContext } from "react";
import Navbar from "../componant/share/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../componant/share/Footer";
import useAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "../auth/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

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
          <ul className="menu p-5 w-auto text-center min-h-screen bg-[#32a88f] text-base-content flex flex-col">
            {/* Sidebar content here */}
            <div className="text-lg mt-8">
              {isAdmin ? (
                <li className="mb-8 text-center text-white bg-yellow-500 mx-7 px-2 py-1 rounded-badge shadow-slate-100 shadow-lg ">
                  Admin Dashboard
                </li>
              ) : (
                <li className="mb-8 text-center text-white bg-yellow-500 mx-7 px-2 py-1 rounded-badge shadow-slate-100 shadow-lg ">
                  User Dashboard
                </li>
              )}

              {isAdmin ? (
                <>
                  <li className="bg-sky-700 text-white my-5 rounded-md">
                    <Link className="" to={"/dashboard/all-users"}>
                      All Users
                    </Link>
                  </li>

                  <li className="bg-sky-700 text-white my-5 rounded-md">
                    <Link className="" to={"/dashboard/all-products"}>
                      All Product
                    </Link>
                  </li>

                  <li className="bg-sky-700 text-center text-white rounded-md">
                    <Link className="" to={"/dashboard/my-products"}>
                      My Products
                    </Link>
                  </li>

                  <li className="bg-sky-700 text-white my-5 rounded-md">
                    <Link className="" to={"/dashboard/add-product"}>
                      Add Product
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="bg-sky-700 text-center text-white rounded-md">
                    <Link className="" to={"/dashboard/my-products"}>
                      My Products
                    </Link>
                  </li>
                  <li className="bg-sky-700 text-white my-5 rounded-md">
                    <Link className="" to={"/dashboard/add-product"}>
                      Add Product
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
