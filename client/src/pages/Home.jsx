import React, { useEffect, useState, useContext } from "react";
import axios from "../api/axios.js";
import PostCard from "../components/PostCard.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
   const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`/posts/${id}`);
        setPosts(posts.filter((post) => post._id !== id));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            
            onDelete={user && post.author._id === user.id ? handleDelete : null}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;