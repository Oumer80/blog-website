import axios from "axios";
import React from "react";
import { useState } from "react";
import useAuth from "../context/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser, navigate } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://glorious-robot-r4pj9x7gx6wq3r9g-8080.app.github.dev/api/users/login",
        { email, password }
      );
      updateUser(response.data);
      console.log(response.data)
      localStorage.setItem("token", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
{error && <p className="text-red-600 mt-4 text-xs">{error}</p>}
            <div className="flex items-center justify-between mt-8">
              
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging In..." : "Login"}
              </button>
             
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-sm text-gray-600 ">Don't have an account?</p>
               <Link to={'/signup'} className="text-purple-700 text-sm">SignUp</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
