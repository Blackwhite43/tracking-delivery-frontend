import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageWithJSbasedForm from '../../api/delivery_data_from_updateid';
import DeliveryContent from "../../../components/delivery/delivery-content-nav";
function Page() {
    let temp = [];
    let temp_data;
    const router = useRouter();
    const data = router.query;
    const [Data, setData] = useState();
    
    if (data.id != 0 && data.id != undefined) {
        temp_data = data.id;
    }
    useEffect(() => {
        const test = async () => {
            const x = await PageWithJSbasedForm(temp_data);
            setData(x);
        }
        test();
    }, [data])
    if (Data != undefined && Data != 0) {
        temp = Data;
    }
    if (temp.length == undefined) {
        return (
            <div className='px-20 py-5'>
                <DeliveryContent
                    plat_no={temp.plat_no}
                    del_id={temp.delivery_update._id}
                    customer={temp.customer}
                    asal={temp.asal}
                    jumlah_surat_jalan={temp.jumlah_surat_jalan}
                    jenis_barang={temp.jenis_barang}
                    instruksi={temp.instruksi}
                    delivery_update={temp.delivery_update.status_delivery}
                    photo={temp.delivery_update.photo!=undefined ? temp.delivery_update.photo : ''}
                    verification={temp.delivery_update.verification}
                    key={temp._id}
                ></DeliveryContent>
            </div>
        )
    }
}
export default Page;