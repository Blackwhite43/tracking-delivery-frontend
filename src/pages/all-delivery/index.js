import DeliveryList from '../../components/delivery/delivery-list';
import { useRouter } from 'next/router';
import PageWithJSbasedForm from '../api/all_delivery_data';
import { useState, useEffect } from 'react';
import get_stats from '../api/get_stats';
export default function Home() {
    const [Data, setData] = useState();
    const [Stats, setStats] = useState();
    const router = useRouter();
    const data = router.query;
    useEffect(() => {
        const test = async () => {
            const x = await PageWithJSbasedForm(data);
            setData(x);
        }
        const test2 = async () => {
            const x = await get_stats(data);
            setStats(x);
        }
        test();
        test2();
    }, [data])
    if (Data != undefined && Stats != undefined) { //filter undefined data
        if (Stats.length != 0 && Data.length != 0) {
            return ( // ignore error saja
                <div className='px-20 py-5'>
                    <DeliveryList items={Data} stats={Stats}></DeliveryList>
                </div>
            )
        }
    }
}