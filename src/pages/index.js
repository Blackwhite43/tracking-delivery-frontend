import DeliveryList from "@/components/delivery/delivery-list";
import { useRouter } from "next/router";
import PageWithJSbasedForm from "./api/home_data";
import AllDelivery from "./api/all_delivery_data";
import { useState, useEffect } from "react";
import { get_information } from "@/components/get_information";
import Image from "next/image";

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
    };
    const test2 = async () => {
      const x = await AllDelivery(data);
      setfullData(x);
    };
    test();
    test2();
  }, [data]);
  if (typeof window !== "undefined") {
    if (localStorage.getItem("no_plat") == "bangkit2023") {
      router.replace("/dashboard")
    }
  }
  if (Data != undefined && fullData != undefined) {
    //filter undefined data
    temp = Data;
    temp2 = fullData;
  }
  driver = get_information(temp2).driver;
  kenek = get_information(temp2).kenek;
  index = get_information(temp2).index;
  delivered = get_information(temp2).delivered;
  if (index - delivered == 0) {
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
