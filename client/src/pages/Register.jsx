import { useState } from "react"
import Swal from "sweetalert2"
import instance from "../config/instance"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const navigate = useNavigate()
    const [input,setInput] = useState({
        username:'', email:'', password:'', rate:''
    })

    async function registerHandler(e) {
        e.preventDefault()
        try {
            await instance({
                method:'post',
                url: '/user/register',
                data: input
            })
            Swal.fire({
                title: "Success",
                text: "Success Sign In",
                icon: "success"
            })
            navigate('/login')
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: error.response.data.message,
                icon: "error"
            })
        }
    }
    return <>
    <div className="p-36">
        <div className="m-auto max-w-sm border rounded-lg shadow-md p-5 bg-white">
            <form onSubmit={registerHandler} className="grid content-center pl-6 gap-5">
                <h1 className="text-center font-bold text-xl mb-3">Register</h1>
                <div className="flex">
                    <label htmlFor="username" className="mr-4">Username</label>
                    <input type="text" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,username: e.target.value})}/>
                </div>

                <div className="flex">
                    <label htmlFor="email" className="mr-12">Email</label>
                    <input type="email" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,email: e.target.value})}/>
                </div>

                <div className="flex gap-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,password: e.target.value})}/>
                </div>

                <div className="flex">
                    <label htmlFor="rate" className="mr-14">Rate </label>
                    <input type="number" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,rate: e.target.value})}/>
                </div>

                <div className="flex justify-center mt-5">
                    <button className="py-1 px-2 rounded bg-[#2775EC] text-white hover:bg-[#1757b7]" type="submit">Sign In</button>
                </div>
            </form>
        </div>
    </div>
    </>
}