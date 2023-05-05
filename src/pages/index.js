import DeliveryList from '../../components/delivery/delivery-list';
import { useRouter } from 'next/router';
import PageWithJSbasedForm from './api/home_data';
import { useState, useEffect } from 'react';
import { get_information } from '../../components/get_information';
export default function Home() {
    const [Data, setData] = useState();
    const router = useRouter();
    let temp = [];
    let driver, kenek;
    // const data = Get_alldata();
    const data = router.query;
    useEffect(() => {
        const test = async () => {
            const x = await PageWithJSbasedForm(data);
            setData(x);
        }
        test();
    }, [data])
    if (Data != undefined) { //filter undefined data
        temp = Data;
    }
    driver = get_information(temp).driver;
    kenek = get_information(temp).kenek;
    return ( // ignore error saja
        <div className='p-5'>
            <div>Halo {driver} dan {kenek}, berikut ini adalah sisa delivery anda</div>
            <br></br>
            <DeliveryList items={temp}></DeliveryList>
        </div>
    )
}