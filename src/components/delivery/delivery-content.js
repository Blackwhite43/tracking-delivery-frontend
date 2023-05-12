import { useRouter } from "next/router";
const preventDefault = f => e => {
    e.preventDefault()
    f(e)
}
function DeliveryContent(props) {
    const {del_id, plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update, verification} = props;
    // console.log(del_id);
    const router = useRouter();
    const handleSubmit = preventDefault(() => {
        router.push({
            pathname: `/all-delivery/${del_id}`,
            query: {
                id: del_id
            }
        })
    });
    return (
        <div className="py-3">
            <div className="bg-orange-400 p-5 rounded-3xl shadow-xl">
                <div>Customer: {customer}</div>
                <div>Asal: {asal}</div>
                <div>Jumlah Surat Jalan: {jumlah_surat_jalan}</div>
                <div>Jenis Barang: {jenis_barang}</div>
                <div>Instruksi: {instruksi}</div>
                <div>Status Delivery: {delivery_update}</div>
                <div>Status Verification: {verification}</div>
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default DeliveryContent;