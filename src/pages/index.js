import DeliveryList from '../../src/components/delivery/delivery-list';
import { useRouter } from 'next/router';
import PageWithJSbasedForm from './api/home_data';
import get_stats from './api/get_stats';
import { useState, useEffect } from 'react';
export default function Home() {
    const [Data, setData] = useState();
    const [Stats, setStats] = useState();
    const router = useRouter();
    const data = router.query;
    // console.log(data);
    // console.log(process.env.TEST);
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
    if (Data != undefined && Stats != undefined) {
        if (Stats.length != 0) {
            const total_delivery = Stats[0].delivered + Stats[0].not_delivered + Stats[0].out_for_delivery + Stats[0].ready_for_delivery;
            if (total_delivery == Stats[0].delivered) {
                return (
                    <div className='px-20 py-5'>
                        <div>Halo {Stats[0]._id.driver} dan {Stats[0]._id.kenek}, delivery anda sudah habis</div>
                    </div>
                )
            }
            else {
                return (
                    <div className='px-20 py-5'>
                        <div>Halo {Stats[0]._id.driver} dan {Stats[0]._id.kenek}, berikut ini adalah sisa delivery anda</div>
                        <br></br>
                        <DeliveryList items={Data} stats={Stats}></DeliveryList>
                    </div>
                )
            }
        }
    }
}