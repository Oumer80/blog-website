  import React from 'react';
    import { Link } from 'react-router-dom';
   
    import axios from 'axios';

    import { FaEdit, FaTrash } from 'react-icons/fa';
import useAuth from '../context/useAuth';

const PostCard = ({ post, onDelete }) => {
  const { user } = useAuth();

        const handleDelete = async () => {
            if (window.confirm('Are you sure you want to delete this post?')) {
                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    };
                    await axios.delete(`/api/posts/${post._id}`, config);
                    onDelete(post._id)
                } catch (error) {
                    console.error(error.response?.data?.message || 'Failed to delete post');
                }
            }
        };

  return (
            <div className="bg-white shadow rounded p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-2">{post.content.substring(0, 100)}...</p>
                <p className="text-gray-500 text-sm">By {post.author.name}</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline">
                        Read More
                    </Link>
                    {user?._id === post.author._id && (
                        <div className="flex gap-2">
                            <Link to={`/edit/${post._id}`} className="text-green-500 hover:underline">
                                <FaEdit />
                            </Link>
                            <button onClick={handleDelete} className="text-red-500 hover:underline">
                                <FaTrash />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
}

export default PostCard