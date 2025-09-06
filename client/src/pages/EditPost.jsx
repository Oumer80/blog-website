import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios.js";
import PostForm from "../components/PostForm.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
const EditPost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);
  if (!user || user.id !== post.author?._id) {
    return <div className="text-center mt-10">Unauthorized</div>;
  }
   const handleSubmit = async (postData) => {
    try {
      await axios.put(`/posts/${id}`, postData);
      navigate("/");
    } catch (error) {
      alert("Error updating post: " + error.response?.data?.message);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      {post.title ? (
        <PostForm
          initialTitle={post.title}
          initialContent={post.content}
          onSubmit={handleSubmit}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default EditPost;