import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    return <>
    <div className="p-52">
        <div className="m-auto max-w-sm border rounded-lg shadow-md p-5 bg-white">
            <form action="" className="pl-8">
                <h1 className="text-center font-bold text-xl mb-3">Login</h1>
                <div className="flex">
                    <label htmlFor="email" className="mr-12">Email</label>
                    <input type="email" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" />
                </div>
                <div className="flex gap-5 mt-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" />
                </div>
                <div className="flex justify-center mt-5 gap-5 pl-0">
                    <button className="py-1 px-2 rounded border-2 border-[#F7F8FB]/120 hover:bg-[#2775EC] hover:text-white" onClick={()=>navigate('/register')}>Sign In</button>
                    <button className="py-1 px-2 rounded bg-[#2775EC] text-white hover:bg-[#1757b7]">Login</button>
                </div>
            </form>
        </div>
    </div>
    </>
}