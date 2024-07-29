import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname|| "/"

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const userInfo = {
          email: data.email,
          password:data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success('Login Successfully!');
            navigate(from,{replace:true})
            setTimeout(()=>{
              window.location.reload()
              localStorage.setItem("Users", JSON.stringify(res.data.user));
            },500)
          }
        }).catch((err)=>{
          if(err.response){
          console.log("Error:", err)
          toast.error("Error:"+err.response.data.message);
          setTimeout(()=>{},500)
          }
        })
      }
    
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div  className=" w-[600px]">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to ='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>
    <h3 className="font-bold text-lg">Login!</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 dark:bg-slate-900 dark:text-white border rouded-md outline-none'
               {...register("email", { required: true })} />
               <br/>
                     {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}

    </div>
    <br/>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 dark:bg-slate-900 dark:text-white border rouded-md outline-none'
        {...register("password", { required: true })}/>
        <br/>
              {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}

    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pik-700 duration 300'>
            Login
        </button>
        <p>Not registered?{" "}
        <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Sign up</Link>{''} </p>

    </div>
    </form>
  </div>
</div>
      </div>
    
    </>
    )
}

export default Login
