import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, onDelete }) => {
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
      </div>
    </div>
  );
};

export default PostCard;