import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import UserModal from "../userModal/UserModal";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const [profile, setProfile] = useState(true);
  console.log(profile);

  //modal popup
  const showModalHandle = () => {
    setShowModal(true);
    setProfile(false);
  };

  const showModalHandleOff = () => {
    setShowModal(false);
    setProfile(true);
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">home</Link>
      </li>

      <li>
        <Link to="/Shop">Shop</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link to="/sign_up">SignUp</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            {profile ? (
              <button
                onClick={() => showModalHandle()}
                className="bg-gradient-to-tr to-black from-blue-500"
              >
                Profile
              </button>
            ) : !profile ? (
              <button
                onClick={() => showModalHandleOff()}
                className="bg-gradient-to-tr to-black from-blue-500"
              >
                Profile
              </button>
            ) : (
              ""
            )}
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar relative lg:px-6 md:px-6 mx-auto bg-gradient-to-t to-gray-600 from-blue-900 text-white justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-10 mt-3 p-2 shadow bg-black rounded-box w-52 capitalize"
            >
              {menuItems}
            </ul>
          </div>
          <p className="font-semibold text-xl uppercase">Fashion Corner</p>
        </div>
        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base capitalize">
            {menuItems}
          </ul>
        </div>
        <label
          htmlFor="my-drawer-2"
          tabIndex={0}
          className="btn btn-ghost lg:hidden md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>

      {showModal && <UserModal setShowModal={setShowModal}></UserModal>}
    </div>
  );
};

export default Navbar;
