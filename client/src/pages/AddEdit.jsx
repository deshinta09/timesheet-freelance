import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import instance from "../config/instance"
import { useEffect, useState } from "react"

export default function AddEdit({ page }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const [projects,setProjects] = useState([])
    const [input,setInput] = useState({
        tittle: '', ProjectId: 0, startDate: '', endDate: '', startTime: '', endTime: ''
    })

    async function allProjects() { // ambil semua project dari db
        try {
            let { data } = await instance({
                method: 'get',
                url: '/projects',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            setProjects(data)
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: "Error Data Projects",
                icon: "error"
            })
        }
    }

    async function activityDetail(){ // ambil data yang akan diedit
        try {
            let { data } = await instance({
                method: 'get',
                url: `/activities/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            setInput(data)
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: "Error Data Activity",
                icon: "error"
            })
        }
    }

    async function handlerSubmit(e){
        e.preventDefault()
        try {
            if(page ==='add'){
                await instance({
                    method: 'post',
                    url: `/activities`,
                    data: input,
                    headers: {
                        Authorization: `Bearer ${localStorage.access_token}`
                    }
                })
                Swal.fire({
                    title: "Success",
                    text: "Success Add Activity",
                    icon: "success"
                })
            } else {
                await instance({
                    method: 'put',
                    url: `/activities/${id}`,
                    data: input,
                    headers: {
                        Authorization: `Bearer ${localStorage.access_token}`
                    }
                })
                Swal.fire({
                    title: "Success",
                    text: "Success Add Activity",
                    icon: "success"
                })
            }
            navigate('/')
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: error.response.data.message,
                icon: "error"
            })
        }
    }

    useEffect(()=>{
        allProjects()
        if(page==='edit'){
            activityDetail()
        }
    },[])
    
    return <>
    <div className="p-8">
        <div className="m-auto max-w-2xl border rounded-lg shadow-md p-7 bg-white text-slate-500">
            <form onSubmit={handlerSubmit} className="grid content-center gap-5">
                <h1 className="text-center font-bold text-xl mb-3 text-black">Tambah Kegiatan Baru</h1>
                <hr />

                <div className="flex gap-3">
                    <div>
                        <label htmlFor="email" className="after:content-['*'] after:text-pink-700 after:ml-1">Tanggal Mulai</label>
                        <input type="date" value={input.startDate.split('T')[0]} className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,startDate: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="email" className="after:content-['*'] after:text-pink-700 after:ml-1">Tanggal Berakhir</label>
                        <input type="date" value={input.endDate.split('T')[0]} className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,endDate: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="email" className="after:content-['*'] after:text-pink-700 after:ml-1">Waktu Mulai</label>
                        <input type="time" value={input.startTime} className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,startTime: e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="email" className="after:content-['*'] after:text-pink-700 after:ml-1">Waktu Berakhir</label>
                        <input type="time" value={input.endTime} className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB]" onChange={(e)=>setInput({...input,endTime: e.target.value})}/>
                    </div>
                </div>

                <div className="grid">
                    <label htmlFor="username" className="after:content-['*'] after:text-pink-700 after:ml-1">Judul Kegiatan</label>
                    <input type="text" value={input.tittle} className="border rounded focus:outline-none focus:ring-1 ring-[#F7F8FB] text-black" onChange={(e)=>setInput({...input,tittle: e.target.value})}/>
                </div>

                <div className="grid">
                    <label htmlFor="rate" className="after:content-['*'] after:text-pink-700 after:ml-1">Nama Proyek</label>
                    <select name="ProjectId" id="ProjectId" className="rounded ring-2 ring-slate-300 active:ring-[#1757b7] text-black" onChange={(e)=>setInput({...input,ProjectId:e.target.value})}>
                        {
                            projects.map(el=>(
                                input.ProjectId === el.id ? 
                                <option key={el.id} value={el.id} selected>{el.name}</option> :
                                <option key={el.id} value={el.id}>{el.name}</option> 
                            ))
                        }
                    </select>
                </div>

                <div className="flex justify-center mt-5 gap-5 pl-0">
                    <button 
                    className="py-1 px-2 rounded border-2 border-[#F7F8FB] hover:bg-[#f15858] hover:text-white" 
                    onClick={()=>navigate('/')}>
                        Kembali
                    </button>
                    <button 
                    className="py-1 px-2 rounded bg-[#f15858] text-white hover:bg-[#bf3030]" type="submit">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
}