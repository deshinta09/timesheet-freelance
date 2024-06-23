import { Outlet } from "react-router-dom";

export default function Navbar() {

    return <>
    <div className="py-4 pl-9 text-[#f15858] bg-white">
        <h1 className="font-bold text-2xl">Timesheet</h1>
        <h1 className="font-bold text-lg">Management</h1>
    </div>
    <div className="bg-white mt-2">
            <h1 className="font-bold text-2xl py-6 pl-9">HH Timesheet</h1>
            <div className="flex gap-5 text-lg pl-12">
                <div className="hover:text-[#2775EC] focus:text-[#2775EC] cursor-pointer active:ring ring-[#F0F6FF]">
                    <h1 className="mb-3">Daftar Kegiatan</h1>
                    <hr />
                </div>
                <div className="hover:text-[#2775EC] focus:text-[#2775EC] cursor-pointer active:ring ring-[#F0F6FF]">
                    <h1 className="mb-3">Pengaturan</h1>
                    <hr />
                </div>
            </div>
        </div>
    <Outlet/>
    </>
}