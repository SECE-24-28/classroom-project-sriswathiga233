import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Search from './Search'
import { Link } from 'react-router-dom'

const Home = () => {
      const {searchResult}=useContext(DataContext)
  return (
    <div>
        <Search />  
        {
        searchResult && searchResult.length > 0 ? searchResult.map((post)=>
           <div key={post.id} className="post">
        <Link to={`/editpost/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.datetime}</p>
              <p>{post.body}</p>
        </Link>
        <hr />
        </div>
     ) : <p>No posts available</p>
     }
    </div>
  )
}

export default Home