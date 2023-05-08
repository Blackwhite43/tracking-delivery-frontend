import DeliveryList from '../../components/delivery/delivery-list';
import { useRouter } from 'next/router';
import PageWithJSbasedForm from '../api/all_delivery_data';
import { useState, useEffect } from 'react';
export default function Home() {
    const [Data, setData] = useState();
    const router = useRouter();
    let temp = [];
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
    return ( // ignore error saja
        <div className='px-80 py-5'>
            <DeliveryList items={temp} stats={temp}></DeliveryList>
        </div>
    )
}