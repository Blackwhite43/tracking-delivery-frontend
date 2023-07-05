import DeliveryList from "@/components/delivery/delivery-list";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [Data, setData] = useState();
  const [Stats, setStats] = useState();
  const router = useRouter();
  let temp, temp2 = [];
  // const data = Get_alldata();
  const data = router.query;
  useEffect(() => {
    axios.post(`${process.env.URL}/api/v1/user/delivery-data`, data)
    .then(data => {
      setData(data.data.data)
    })
    .catch(error => {
      console.log(error);
    })
    axios.post(`${process.env.URL}/api/v1/user/stats`, data)
    .then(data => {
      setStats(data.data.data[0]);
    })
    .catch(error => {
      console.log(error);
    })
  }, [data]);
  if (Data != undefined && Stats != undefined) {
    //filter undefined data
    temp = Data;
    temp2 = Stats;
  }
  return (
    // ignore error saja
    <div className="px-2 py-5 items-center">
      <DeliveryList items={temp} stats={temp2}></DeliveryList>
    </div>
  );
}
