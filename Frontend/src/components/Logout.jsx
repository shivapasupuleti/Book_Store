import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logut successfully");
            setTimeout(()=>{
              window.location.reload()
            },500)
        }
        catch(error){
            toast.error("Error:"+error.message)
            setTimeout(()=>{},500)
        }
    }
  return (
   <>
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick = {handleLogout} >
            Logout
            </button>
        
      
      </div>
   </>
  )
}

export default Logout
