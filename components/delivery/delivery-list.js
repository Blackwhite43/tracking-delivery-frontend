import DeliveryContent from './delivery-content';
import { get_information } from '../../components/get_information';
function DeliveryList(props) {
    const {items} = props;
    let plat, driver, kenek, index, delivered;
    plat = get_information(items).plat_no;
    driver = get_information(items).driver;
    kenek = get_information(items).kenek;
    delivered = get_information(items).delivered;
    index = get_information(items).index;
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
                    customer={item.customer}
                    asal={item.asal}
                    jumlah_surat_jalan={item.jumlah_surat_jalan}
                    jenis_barang={item.jenis_barang}
                    instruksi={item.instruksi}
                    delivery_update={item.delivery_update.status_delivery}
                    key={item._id}
                />
            )}
        </div>
    )
}
export default DeliveryList;