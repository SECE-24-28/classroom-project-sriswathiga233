import './App.css'
import Home from './home'
import AddPost from './AddPost'
import DataContext, { DataProvider } from './context/DataContext'
import {Link,Route,Routes} from 'react-router-dom'
import EditPost from './EditPost'
function App() {
  
  return (
    <>
    <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/newpost">Newpost</Link></li>
    </ol>
    <DataProvider>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/newpost" element={<AddPost />} />
           <Route path="/editpost/:id" element={<EditPost />}  />
       </Routes>
    </DataProvider>
    </>
  )
}
export default App