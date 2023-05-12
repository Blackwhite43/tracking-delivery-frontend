import DeliveryContent from './delivery-content';
function DeliveryList(props) {
    const {items, stats} = props;
    return (
        <div>
            <div>Plat No: {stats[0]._id.plat_no}</div>
            <div>Driver: {stats[0]._id.driver}</div>
            <div>Kenek: {stats[0]._id.kenek}</div>
            <div>Delivered: {stats[0].delivered}</div>
            <div>Ready For Delivery: {stats[0].ready_for_delivery}</div>
            <div>Out For Delivery: {stats[0].out_for_delivery}</div>
            <div>Not Delivered: {stats[0].not_delivered}</div>
            <br></br>
            {items.map(item => 
                <DeliveryContent
                    // plat_no={item.plat_no}
                    // driver={item.driver}
                    // kenek={item.kenek}
                    del_id={item.delivery_update._id}
                    customer={item.customer}
                    asal={item.asal}
                    jumlah_surat_jalan={item.jumlah_surat_jalan}
                    jenis_barang={item.jenis_barang}
                    instruksi={item.instruksi}
                    delivery_update={item.delivery_update.status_delivery}
                    verification={item.delivery_update.verification}
                    key={item._id}
                ></DeliveryContent>
            )}
        </div>
    )
}
export default DeliveryList;