import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import instance from "../config/instance"

export default function Login(){
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function handlerSubmit(e) {
        e.preventDefault()
        try {
            let { data } = await instance({
                method: 'post',
                url: '/user/login',
                data:{
                    email, password
                }
            })
            localStorage.setItem('access_token', data.access_token)
            Swal.fire({
                title: "Success",
                text: "Success Login!",
                icon: "success"
            });
            navigate('/')
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: error.response.data.message,
                icon: "error"
            });
            console.log(error.response.data.message,'<<< errornya');
        }
    }

    return <>
    <div className="p-52">
        <div className="m-auto max-w-sm border rounded-lg shadow-md p-5 bg-white">
            <form onSubmit={handlerSubmit} className="pl-8">
                <h1 className="text-center font-bold text-xl mb-3">Login</h1>
                <div className="flex">
                    <label htmlFor="email" className="mr-12">Email</label>
                    <input type="email" 
                    className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="flex gap-5 mt-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-center mt-5 gap-5 pl-0">
                    <button 
                    className="py-1 px-2 rounded border-2 border-[#F7F8FB]/120 hover:bg-[#2775EC] hover:text-white" 
                    onClick={()=>navigate('/register')}>
                        Sign In
                    </button>
                    <button 
                    className="py-1 px-2 rounded bg-[#2775EC] text-white hover:bg-[#1757b7]" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
}