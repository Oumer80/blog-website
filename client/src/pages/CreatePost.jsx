import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios.js";
import PostForm from "../components/PostForm.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  if (!user) navigate("/login");
  const handleSubmit = async (postData) => {
    try {
      await axios.post("/posts", postData);
      navigate("/");
    } catch (error) {
      alert("Error creating post: " + error.response?.data?.message);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};
export default CreatePost;