import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const UserModal = ({ setShowModal }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="modal-confirm absolute right-0 px-6 w-auto bg-slate-200 rounded-lg shadow-lg text-center">
      {/* <div className="avatar">
        <div className="w-24 mt-14 rounded-full">
          <img src="" />
        </div>
      </div> */}
      <div className="py-16">
        <h3 className="text-black my-7 p-1 rounded-md shadow-lg shadow-slate-800 text-lg">
          Name: {user?.displayName}
        </h3>
        <h3 className="text-black my-7 text-lg p-1 rounded-md shadow-lg shadow-slate-800">
          Email: {user?.email}
        </h3>
      </div>
      <div className="flex justify-end p-7 gap-7">
        {/* <button className="btn btn-sm btn-warning">Edit Profile</button> */}
        <button
          className="btn btn-sm btn-accent"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
