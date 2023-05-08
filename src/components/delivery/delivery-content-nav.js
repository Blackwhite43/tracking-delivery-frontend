import axios from "axios";
import { useRouter } from "next/router";
function DeliveryContent(props) {
    const router = useRouter();
    const {del_id, plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update} = props;
    // console.log(plat_no);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:3000/api/v1/user/update-delivery/${del_id}`, {status_delivery: document.getElementById('status').value})
        .then(res => {
            if (res.data.status == 'success') {
                alert(res.data.status);
                router.push('/');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="py-3">
            <div className="bg-orange-400 p-5 rounded-3xl shadow-xl">
                <div>Customer: {customer}</div>
                <div>Asal: {asal}</div>
                <div>Jumlah Surat Jalan: {jumlah_surat_jalan}</div>
                <div>Jenis Barang: {jenis_barang}</div>
                <div>Instruksi: {instruksi}</div>
                <div>Status Delivery: {delivery_update}</div>
                <select name="status" id="status">
                    <option value="Ready for Delivery">Ready for Delivery</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Not Delivered">Not Delivered</option>
                </select>
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
                    Update
                </button>
            </div>
        </div>
    )
}
export default DeliveryContent;