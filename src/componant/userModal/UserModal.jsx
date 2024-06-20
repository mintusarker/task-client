import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const UserModal = ({ setShowModal }) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user.photoURL);

  //logout user
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
      setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center modal-confirm absolute z-50 right-0 px-6 w-auto bg-gray-300 rounded-lg shadow-lg text-center">
      {user?.photoURL ? (
        <div className="avatar">
          <div className="w-24 mt-14 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
      ) : (
        <div className="avatar">
          <div className="w-24 mt-14 rounded-full">
            <img src="" />
          </div>
        </div>
      )}
      <div className="py-6">
        <h3 className="text-black p-1">
          Name: {user?.displayName}
        </h3>
        <h3 className="text-black p-1">
          Email: {user?.email}
        </h3>
      </div>
      <div className="flex justify-end p-7 gap-7">
        <button className="btn btn-xs rounded" onClick={handleLogout}>Logout</button>

        <button
          className="btn btn-xs rounded btn-accent"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
