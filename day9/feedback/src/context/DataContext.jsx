import {format} from 'date-fns';
import { createContext,useState,useEffect } from "react";
import api from '../api/Post'
import { useNavigate } from 'react-router-dom';

const DataContext = createContext()
export const DataProvider = ({ children }) => 
{
 const [posts, setPosts] = useState([
    {
      "id": "1",
      "title": "Sample Post",
      "datetime": "Dec 12, 2024 10:00:00 AM",
      "body": "This is a sample post to test the app."
    }
  ])
  const [search, setSearch] = useState("")
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const navigate=useNavigate()
  
  useEffect(()=>
  {
       const fetData=async()=>
       {
          try {
            const res=await api.get("/feedback")
            setPosts(res.data)
          } catch (error) {
            console.log('API not available, using sample data')
            // Keep the sample data, don't overwrite with empty array
          }
        }
        fetData();
  },[]
  )
   useEffect(()=>
  {
    const filtered=posts.filter((post)=>
                                  (post.title).toLowerCase().includes(search.toLowerCase()))
     setSearchResult(filtered.reverse())
   },[posts,search])

   const handleSubmit=async(e)=>
   {
      e.preventDefault()
      if(!title || !body) return
      
      const id=(posts.length)?String((Number(posts[posts.length-1].id)+1)):("1")
      const datetime=format(new Date(),"MMM dd,yyyy pp")
      const newObj={id,title,datetime,body}
      

      try {
        await api.post("/feedback",newObj)
      } catch (error) {
        console.log('API not available, adding locally only')
      }
      
      const newList=[...posts,newObj]
      setPosts(newList)
      setTitle('')
      setBody('')
      alert("Data insertion success...")
      navigate("/")
   }
   const handleDelete=async(id)=>
   {
      console.log('Deleting post with ID:', id)
      try{
         await api.delete(`/feedback/${id}`)
         alert("Deletion Success")
         const newList=posts.filter((post)=>post.id.toString()!==id.toString())
         setPosts(newList)
         navigate("/")
      }
      catch(err){
        console.log('Delete error:', err)
        // Delete locally even if API fails
        const newList=posts.filter((post)=>post.id.toString()!==id.toString())
        setPosts(newList)
        alert("Deleted locally (API not available)")
        navigate("/")
      }
   }
  
  return (
    <DataContext.Provider value={{posts,searchResult,title,setTitle,body,setBody,
                                 search,setSearch,handleSubmit,handleDelete}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext