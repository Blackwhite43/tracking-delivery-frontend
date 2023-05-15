import { useState, useEffect } from 'react';
import useSWR from 'swr';

export function Get_alldata() {
    let temp = [];
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data, error, isLoading} = useSWR(`${process.env.URL}/api/v1/delivery/`, fetcher)
    const [delivery, setDelivery] = useState();
    useEffect(() => {
        if (data) {
            for (const key in data.data) {
                temp.push(data.data[key]);
            }
            setDelivery(temp);
        }
    }, [data])
    return delivery;
}