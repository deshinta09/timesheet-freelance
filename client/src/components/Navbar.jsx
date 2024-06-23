import { Outlet } from "react-router-dom";

export default function Navbar() {

    return <>
    <div className="py-3 pl-10 text-[#f15858] bg-white">
        <h1 className="font-bold text-lg">Timesheet</h1>
        <h1 className="font-bold text-sm">Management</h1>
    </div>
    <div className="bg-white mt-1">
            <h1 className="font-bold text-xl py-4 pl-7">HH Timesheet</h1>
            <div className="flex gap-5 text-base pl-12">
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