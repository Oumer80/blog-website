import React from "react";
import useAuth from "../context/useAuth";

import { Link } from "react-router-dom";

const Profile = () => {

  const { user, logout } = useAuth();
 

  return (
    <div className=" fixed inset-0 z-50 bg-white rounded-t-3xl overflow-hidden left-[calc(100vw-250px)] top-[60px] w-40 ">
      <div className="p-3 flex flex-col gap-3 border  items-center rounded-md drop-shadow-md">
        <p className="text-slate-500 text-sm">{user.name}</p>
        <p className="text-slate-500 italic ">{user.email}</p>
        <Link to={"/profile"} className="px-4 py-2 rounded-md hover:bg-slate-800 text-slate-500 border">My Profile</Link>
        <button onClick={logout} className="px-4 py-2 rounded-md bg-red-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
