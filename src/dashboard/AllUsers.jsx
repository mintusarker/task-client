import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  //   const [users, setUsers] = useState([]);
  //   console.log(users);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  //delete users
  const handleUserRemove = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("User Deleted successfully", { duration: 500 });
      });
  };

  return (
    <div>
      <h3 className="text-xl bg-slate-900 text-white text-center my-6">
        Total Products : {users?.length}
      </h3>
      <div className="overflow-x-auto my-12">
        <table className="table">
          <thead>
            <tr className="text-red-800 text-lg">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Status</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                {/* <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.image_url} alt="shopping item" />
                      </div>
                    </div>
                  </div>
                </td> */}
                <td>{user?.name}</td>
                <td>{user?.email} tk</td>
                <td className="text-green-900">
                  {" "}
                  {user?.role ? user?.role : "User"}{" "}
                </td>

                <td>
                  <div className="flex flex-wrap justify-center items-center">
                    {user?.role ? (
                      ""
                    ) : (
                      <button
                        onClick={() => handleUserRemove(user?._id)}
                        className="btn btn-sm m-4 px-5 btn-warning"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
