import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import instance from "../config/instance"
import { useEffect, useState } from "react"

export default function Home(){
    const navigate = useNavigate()
    const [activities,setActivities] = useState([])
    const [search,setSearch] = useState('')
    const [profile,setProfile] = useState({})
    
    function logOutHandler(e) {
        e.preventDefault()
        localStorage.removeItem("access_token")
        navigate("/login")
        Swal.fire({
            title: "Success",
            text: "Success Logout!",
            icon: "success"
        });
    }

    async function allActivities() {
        try {
            let { data } = await instance({
                method: 'get',
                url: `/activities?search=${search}`,
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            setActivities(data)
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: error.response.data.message,
                icon: "success"
            })
        }
    }

    async function getProfile(){
        try {
            let { data } = await instance({
                method: 'get',
                url: '/user',
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            setProfile(data)
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: error.response.data.message,
                icon: "error"
            })
        }
    }

    async function deleteActivity(id) {
        try {
            let { data } = await instance({
                method: 'delete',
                url: `/activities/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            Swal.fire({
                title: "Success",
                text: data.message,
                icon: "success"
            })
            allActivities()
            getProfile()
        } catch (error) {
            Swal.fire({
                title: "Oops...",
                text: error.response.data.message,
                icon: "error"
            })
        }
    }

    useEffect(()=>{
        allActivities()
    },[search])
    
    useEffect(()=>{
        getProfile()
    },[])

    return (
        <>
        <div className="m-5 bg-white rounded-lg">
            <div className="flex justify-between p-5">
                <div className="flex">
                    <div className="mr-16">
                        <h1 className="text-sm">Nama Karyawan</h1>
                        <h3 className="text-base">{profile.username}</h3>
                    </div>
                    <div>
                        <h1 className="text-sm">Rate</h1>
                        <h3 className="text-base">Rp {profile.rate}/jam</h3>
                    </div>
                </div>
                <div>
                    <button className="px-3 py-1 rounded border border-[#f15858] hover:bg-[#f15858] hover:text-white" onClick={logOutHandler}>Log out</button>
                </div>
            </div>
            <hr />
            <div className="flex justify-between p-6 text-base">
                <div className="flex gap-5 font-bold">
                    <h1>Daftar Kegiatan</h1>
                    <button className="py-1 px-2 rounded bg-[#F7F8FB] text-[#2775EC]" onClick={()=>navigate('/add-activity')}>Tambah Kegiatan</button>
                </div>
                <div>
                    <input type="text" placeholder="cari" className="rounded py-1 px-2 border focus:outline-none focus:ring-1 ring-[#F7F8FB] mr-3 placeholder:text-slate-400" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
            <div className="px-5 pb-5">
                <div className="table-auto min-w-full divide-y divide-[#F7F8FB] rounded-lg ring ring-[#F7F8FB] ring-offset-0 text-base">
                    <table className="min-w-full text-center">
                        <thead className="font-bold">
                            <tr>
                                <th>Judul Kegiatan</th>
                                <th>Nama Proyek</th>
                                <th>Tanggal Mulai</th>
                                <th>Tanggal Berakhir</th>
                                <th>Waktu Mulai</th>
                                <th>Waktu Berakhir</th>
                                <th>Durasi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F7F8FB]">
                            {
                                activities.map(el=>(
                                    <tr key={el.id}>
                                        <td>{el.tittle}</td>
                                        <td>{el?.Project?.name}</td>
                                        <td>{el.startDate.split('T')[0]}</td>
                                        <td>{el.endDate.split('T')[0]}</td>
                                        <td>{el.startTime}</td>
                                        <td>{el.endTime}</td>
                                        <td>{el.duration}</td>
                                        <td className="flex justify-center mt-5 gap-5 pl-0">
                                            <button className="py-1 px-2 rounded border-2 border-[#F7F8FB]/120 hover:bg-[#2775EC] hover:text-white" onClick={()=>navigate(`/edit-activity/${el.id}`)}>Edit</button>
                                            <button className="py-1 px-2 rounded border-2 border-[#f15858] hover:bg-[#f15858] hover:text-white" onClick={()=>deleteActivity(el.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="bg-[#F7F8FB] text-[#2775EC] p-3">
                        <div className="flex justify-between">
                            <h1>Total Durasi</h1>
                            <h1>{profile.duration}</h1>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span>Total Pendapatan</span>
                            <span>Rp {profile.income}</span>
                        </div>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}