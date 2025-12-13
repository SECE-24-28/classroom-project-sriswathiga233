import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [SList,setSList] = useState([])
   
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res=await api.get('/student')
        setSList(res.data)
        //consiole.log(res.data)

      }catch(err){
        //console.error(err)
      }
    }
    fetchData()
  }, [])
  return (
    <>
    {
      SList.map((stu)=>
        <p>{stu.sid}-{stu.sname}-{stu.smark}</p>
    )
    }
      
    </>
  )
}

export default App
