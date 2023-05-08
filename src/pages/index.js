import DeliveryList from '../../src/components/delivery/delivery-list';
import { useRouter } from 'next/router';
import PageWithJSbasedForm from './api/home_data';
import AllDelivery from './api/all_delivery_data';
import { useState, useEffect } from 'react';
import { get_information } from '../../src/components/get_information';
export default function Home() {
    const [Data, setData] = useState();
    const [fullData, setfullData] = useState();
    const router = useRouter();
    let temp = [];
    let temp2 = [];
    let driver, kenek, index, delivered;
    // const data = Get_alldata();
    const data = router.query;
    useEffect(() => {
        const test = async () => {
            const x = await PageWithJSbasedForm(data);
            setData(x);
        }
        const test2 = async () => {
            const x = await AllDelivery(data);
            setfullData(x);
        }
        test();
        test2();
    }, [data])
    
    if (Data != undefined && fullData != undefined) { //filter undefined data
        temp = Data;
        temp2 = fullData;
    }
    driver = get_information(temp2).driver;
    kenek = get_information(temp2).kenek;
    index = get_information(temp2).index;
    delivered = get_information(temp2).delivered;
    if (index-delivered == 0) {
        return ( // ignore error saja
            <div className='px-80 py-5'>
                <div>Halo {driver} dan {kenek}, delivery anda sudah habis</div>
            </div>
        )
    }
    else {
        return ( // ignore error saja
            <div className='px-80 py-5'>
                <div>Halo {driver} dan {kenek}, berikut ini adalah sisa delivery anda</div>
                <br></br>
                <DeliveryList items={temp} stats={temp2}></DeliveryList>
            </div>
        )
    }
}