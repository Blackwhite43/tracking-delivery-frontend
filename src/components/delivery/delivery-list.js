import DeliveryContent from './delivery-content';
import { get_information } from '../../components/get_information';
function DeliveryList(props) {
    const {items, stats} = props;
    let plat, driver, kenek, index, delivered;
    plat = get_information(stats).plat_no;
    driver = get_information(stats).driver;
    kenek = get_information(stats).kenek;
    delivered = get_information(stats).delivered;
    index = get_information(stats).index;
    return (
        <div>
            <div>Plat No: {plat}</div>
            <div>Driver: {driver}</div>
            <div>Kenek: {kenek}</div>
            <div>Delivered: {delivered}</div>
            <div>Remaining Deliveries: {index-delivered}</div>
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
                    key={item._id}
                ></DeliveryContent>
            )}
        </div>
    )
}
export default DeliveryList;