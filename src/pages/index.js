import DeliveryList from "@/components/delivery/delivery-list";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  const [Home, setHome] = useState();
  const [Stats, setStats] = useState();
  const router = useRouter();
  let temp = [];
  let temp2 = [];
  let driver, kenek, ready_for_delivery;
  // const data = Get_alldata();
  const data = router.query;
  useEffect(() => {
    axios.post(`${process.env.URL}/api/v1/user/home`, data)
    .then(data => {
      setHome(data.data.data);
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
  if (typeof window !== "undefined") {
    if (localStorage.getItem("no_plat") == "bangkit2023") {
      router.replace("/dashboard")
    }
  }
  if (Home != undefined && Stats != undefined) {
    temp = Home;
    temp2 = Stats;
  }
  driver = temp2._id?.driver;
  kenek = temp2._id?.kenek;
  ready_for_delivery = temp2.ready_for_delivery;
  if (ready_for_delivery == 0) {
    return (
      // ignore error saja
      <div className="px-10 py-5 flex items-center flex-col">
        <div>
          Halo {driver} dan {kenek}, delivery anda sudah habis
        </div>
        <Image
          width={520}
          height={520}
          src="/templates/assets/img/no_delivery.png"
          className="flag-width mt-10"
          alt="no_delivery"
        />
      </div>
    );
  } else {
    return (
      // ignore error saja
      <div className="px-2 py-5 items-center">
        <div>
          Halo {driver} dan {kenek}, berikut ini adalah sisa delivery anda
        </div>
        <br></br>
        <DeliveryList items={temp} stats={temp2}></DeliveryList>
      </div>
    );
  }
}
