export default function Home(){
    return (
        <>
        <div className="m-7 bg-white rounded-lg">
            {/* <h1 className="font-bold text-center text-2xl">Table</h1> */}
            <div className="flex p-7">
                <div className="mr-16">
                    <h1>Nama Karyawan</h1>
                    <h3 className="text-xl">User 1</h3>
                </div>
                <div>
                    <h1>Rate</h1>
                    <h3 className="text-xl">Rp 12.000/jam</h3>
                </div>
            </div>
            <hr />
            <div className="flex p-7 gap-5">
                <h1>Daftar Kegiatan</h1>
                <button className="py-1 px-2 rounded bg-[#F7F8FB] text-[#2775EC]">Tambah Kegiatan</button>
            </div>
            <div className="p-6">
                <table className="table-auto text-center min-w-full divide-y divide-[#F7F8FB] rounded-lg ring ring-[#F7F8FB] ring-offset-0">
                    <thead className="">
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F7F8FB]">
                        <tr>
                            <td>The Sliding Mr. Bones</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>The Sliding Mr. Bones</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}