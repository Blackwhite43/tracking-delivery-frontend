function DeliveryContent(props) {
    const {plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update} = props;
    // console.log(plat_no);
    return (
        <div>
            {/* <div>Plat No: {plat_no}</div>
            <div>Driver: {driver}</div>
            <div>Kenek: {kenek}</div> */}
            <div>Customer: {customer}</div>
            <div>Asal: {asal}</div>
            <div>Jumlah Surat Jalan: {jumlah_surat_jalan}</div>
            <div>Jenis Barang: {jenis_barang}</div>
            <div>Instruksi: {instruksi}</div>
            <div>Status Delivery: {delivery_update}</div>
            <br></br>
        </div>
    )
}
export default DeliveryContent;