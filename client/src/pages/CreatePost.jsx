
import { MdTitle } from 'react-icons/md'
import DashboardLayout from '../components/DashboardLayout'
import axios from 'axios'
import { useState } from 'react'
import useAuth from '../context/useAuth'


const CreatePost = () => {
  const [title, setTitle]=useState('')
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState('')
  const [content, setContent]=useState('')
  const [image, setImage]=useState('')
 const {user}=useAuth()

  const handleSubmit=async(e)=>{
     e.preventDefault()
     setError('')
     setLoading(true)
     try {
      const response = await axios.post('https://glorious-robot-r4pj9x7gx6wq3r9g-8080.app.github.dev/api/posts',{title,image,content},{withCredentials:true},{headers:{'Authorization':`Bearer ${user.token}`}})
      
      console.log(response.data)
     } catch (error) {
      setError(error.response?.data?.message)
     }finally{
      setLoading(false)
     }
  }
 
  return (
    <DashboardLayout activeMenu={'Create Post'}>
     <h1 className='text-center text-2xl font-bold'>Create Post</h1>
    {user && <div className='mt-4'>
      <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label
                className=" text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                content
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                type="content"
                placeholder="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="text"
                placeholder="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
           
{error && <p className="text-red-600 mt-4 text-xs">{error}</p>}
            <div className="flex items-center justify-between mt-8">
              
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? "Adding In..." : "Add"}
              </button>
             
            </div>
            <div className="flex items-center justify-between mt-3">
             
            </div>
          </div>
        </form>
     </div>}
    </DashboardLayout>
  )
}

export default CreatePost