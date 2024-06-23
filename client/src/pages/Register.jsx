export default function Register(){
    return <>
    <div className="p-36">
        <div className="m-auto max-w-sm border rounded-lg shadow-md p-5 bg-white">
            <form action="" className="grid content-center pl-6 gap-5">
                <h1 className="text-center font-bold text-xl mb-3">Register</h1>
                <div className="flex">
                    <label htmlFor="username" className="mr-4">Username</label>
                    <input type="text" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" />
                </div>

                <div className="flex">
                    <label htmlFor="email" className="mr-12">Email</label>
                    <input type="email" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" />
                </div>

                <div className="flex gap-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" />
                </div>

                <div className="flex">
                    <label htmlFor="rate" className="mr-14">Rate </label>
                    <input type="number" className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" />
                </div>

                <div className="flex justify-center mt-5">
                    <button className="py-1 px-2 rounded bg-[#2775EC] text-white">Login</button>
                </div>
            </form>
        </div>
    </div>
    </>
}