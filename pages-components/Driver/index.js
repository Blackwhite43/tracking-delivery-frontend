import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18n from "@/services/i18n";
import DataTable from "@/components/DataTable/driver";
import axios from "axios";
import EventsSearch from "@/components/Admin/event-search";

const AllDelivery = () => {
  const router = useRouter();
  const [delivery, setDelivery] = useState([]);
  function refreshDataDelivery(startDate, endDate) {
    var dataSearch = {
      date_start: startDate,
      date_end: endDate,
      tips: 5000
    };
    axios.post(`${process.env.URL}/api/v1/admin/driver-stats`, dataSearch)
    .then((hsl) => {
      setDelivery(hsl.data.data);
    });
  }
  
  useEffect(() => {
    var getDate = new Date();
    var currentDate = getDate.toISOString().split("T")[0];
    var dataSearch = {
      date_start: currentDate,
      date_end: currentDate,
      tips: 5000
    };
    axios.post(`${process.env.URL}/api/v1/admin/driver-stats`, dataSearch)
    .then((hsl) => {
      setDelivery(hsl.data.data);
    });
  }, [])

  const columnsDelivery = [
    {
      name: "_id",
      label: "id",
      options: {
        display: "excluded",
        filter: false,
        setCellHeaderProps: () => ({}),
      },
    },
    {
      name: "_id",
      label: i18n.t("Nama Driver"),
      options: {
        filter: true,
        setCellHeaderProps: () => ({
          style: {
            fontSize: "4em",
          },
        }),
        setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        width: "5em",
        fontSize: "4em",
        customBodyRender: (value) => {
          return (
            <div>
              {value.driver}
            </div>
          )
        }
      },
    },
    {
      name: "pending",
      label: i18n.t("Pending"),
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: {
            fontSize: "4em",
          },
        }),
        setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        width: "5em",
        fontSize: "4em",
      },
    },
    {
      name: "verified_by_delivery_team",
      label: i18n.t("Verified by Delivery Team"),
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: {
            fontSize: "4em",
          },
        }),
        setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        width: "5em",
        fontSize: "4em",
      },
    },
    {
      name: "tips",
      label: i18n.t("Tips"),
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: {
            fontSize: "4em",
          },
        }),
        setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        width: "5em",
        fontSize: "4em",
      },
    }
  ];
  return (
    <>
      <div class="m-3 p-3 bg-[var(--warna-14)] border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between">
          <div class="text-2xl font-bold mb-2 text-[var(--warna-9)]">
            Tips Delivery
          </div>
        </div>
        <div className="widget-content">
          <EventsSearch onSearch={refreshDataDelivery} />
          <DataTable
            title="Tips Delivery"
            data={delivery}
            columns={columnsDelivery}
          />
        </div>
      </div>
    </>
  );
};

export default AllDelivery;
