import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const EditPost = () => {
    const {posts,handleDelete}=useContext(DataContext)
    const {id} = useParams ()
    console.log('URL ID:', id, 'Posts:', posts)
    const post=posts.find((p)=>p.id.toString()===id)
    
    if(!post)
        return (
            <div>
                <h1>There is no data.. ID: {id}</h1>
                <p>Available posts: {posts.length}</p>
            </div>
        )

  return (
    <div>
        <h1>Edit Post</h1>
        <hr />
        <input type="text" value={post.title} readOnly /><br />
        <textarea value={post.body} readOnly></textarea>
        <br />
        <button onClick={()=>{
            console.log('Delete clicked for ID:', post.id)
            handleDelete(post.id)
        }}>Delete</button>
    </div>
  )
}

export default EditPost