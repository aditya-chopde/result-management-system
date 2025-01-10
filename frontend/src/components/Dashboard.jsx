import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Dashboard = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const {id} = useParams()
    
    useEffect(() => {
      if(token!=id){
        navigate('/login')
      }
    }, [])
    
  return (
    <div className='text-center'>
      
    </div>
  )
}

export default Dashboard
