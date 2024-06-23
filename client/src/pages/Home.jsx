export default function Home(){
    return (
        <>
        <div className="m-5 bg-white rounded-lg">
            {/* <h1 className="font-bold text-center text-2xl">Table</h1> */}
            <div className="flex p-5">
                <div className="mr-16">
                    <h1 className="text-sm">Nama Karyawan</h1>
                    <h3 className="text-base">User 1</h3>
                </div>
                <div>
                    <h1 className="text-sm">Rate</h1>
                    <h3 className="text-base">Rp 12.000/jam</h3>
                </div>
            </div>
            <hr />
            <div className="flex justify-between p-6 text-base">
                <div className="flex gap-5 font-bold">
                    <h1>Daftar Kegiatan</h1>
                    <button className="py-1 px-2 rounded bg-[#F7F8FB] text-[#2775EC]">Tambah Kegiatan</button>
                </div>
                <div>
                    <form action="">
                        <input type="text" className="rounded py-1 px-2 border focus:outline-none focus:ring-1 ring-[#F7F8FB] mr-3" />
                        <button type="submit" className="py-1 px-2 rounded bg-[#2775EC] text-white">cari</button>
                    </form>
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
                            <tr>
                                <td>Pembuatan Website</td>
                                <td>UI Desain</td>
                                <td>2 Okt 2024</td>
                                <td>3 Okt 2024</td>
                                <td>09.00</td>
                                <td>15.00</td>
                                <td>06.00</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Pembuatan Server</td>
                                <td>UI Desain</td>
                                <td>3 Okt 2024</td>
                                <td>4 Okt 2024</td>
                                <td>09.00</td>
                                <td>15.00</td>
                                <td>06.00</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="bg-[#F7F8FB] text-[#2775EC] p-3">
                        <div className="flex justify-between">
                            <h1>Total Durasi</h1>
                            <h1>8 jam 50 menit</h1>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span>Total Pendapatan</span>
                            <span>Rp 153.000</span>
                        </div>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}