import React from "react";
import useAuth from "../context/useAuth";

import { Link } from "react-router-dom";

const Profile = () => {

  const { user, logout } = useAuth();
 

  return (
    <div className=" fixed inset-0 z-50 bg-white  right-[50px] top-[65px] w-48 ">
      <div className="p-3 flex flex-col gap-3 border rounded-md drop-shadow-md">
        <p className="text-slate-500 ">{user.name}</p>
        <p className="text-slate-500  ">{user.email}</p>
        <Link to={"/profile"} className="px-4 py-2 rounded-md hover:bg-slate-800 text-slate-500 border">My Profile</Link>
        <button onClick={logout} className="px-4 py-2 rounded-md bg-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
