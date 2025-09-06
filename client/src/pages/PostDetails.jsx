import React, { useEffect, useState, useContext } from "react";
import axios from "../api/axios.js";
import PostCard from "../components/PostCard.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
const PostDetails = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const {id}=useParams()
  const navigate = useNavigate()
 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);
   const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`/posts/${id}`);
        navigate('/')    
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-2">{post.content.substring(0, 150)}...</p>
      <p className="text-sm text-gray-500 mb-2">
        By <span className="font-medium">{post.author.username}</span> on{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="flex space-x-2">
        <Link
          to={`/posts/${post._id}`}
          className="text-blue-600 hover:underline"
        >
          Read More
        </Link>
        {onDelete && (
          <button
            onClick={() => onDelete(post._id)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        )}
        {isAuthor && (
          <button
            onClick={() => onEdit(post._id)}
            className="text-red-600 hover:underline"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
export default PostDetails;