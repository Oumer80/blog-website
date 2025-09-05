
import { useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import axios from 'axios'

import PostCard from '../components/PostCard';
import useAuth from '../context/useAuth';
import { Link } from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState([]);
        const { user } = useAuth();

        useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await axios.get("https://glorious-robot-r4pj9x7gx6wq3r9g-8080.app.github.dev/api/posts");
                    setPosts(response.data);
                    console.log(user)
                } catch (error) {
                    console.error(error);
                }
            };

            fetchPosts();
        }, []);

        const handleDelete = (deletedPostId) => {
            setPosts(posts.filter(post => post._id !== deletedPostId));
        };
  
  return (
    <DashboardLayout activeMenu='Dashboard'>
     <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
                {user && (
                    <div className="mb-4">
                        <Link to="/create-post" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Create New Post
                        </Link>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  hello 
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} onDelete={handleDelete} />
                    ))}
                </div>
    </DashboardLayout>
  )
}

export default Home