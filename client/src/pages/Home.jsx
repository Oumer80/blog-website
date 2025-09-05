
import { useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import axios from 'axios'

const Home = () => {
  // const [posts, setPosts] = useState([])
  
useEffect(()=>{
  const fetchPosts = async () => {
    const response= await axios.get("https://glorious-robot-r4pj9x7gx6wq3r9g-8080.app.github.dev/api/posts")
    console.log(response.data)
  }
  fetchPosts()
},[])

  return (
    <DashboardLayout activeMenu='Dashboard'>
      Home
    </DashboardLayout>
  )
}

export default Home