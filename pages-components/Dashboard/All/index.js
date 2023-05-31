import React, { useEffect, useState } from "react";
import i18n from "@/services/i18n";
import DataTable from "@/components/DataTable";
import axios from "axios";

const AllDelivery = () => {
  const [delivery, setDelivery] = useState([]);

  function refreshDataDelivery() {
    try {
      axios.get(`${process.env.URL}/api/v1/admin/`).then((hsl) => {
        setDelivery(hsl.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    refreshDataDelivery();
  }, []);

  const columnsDelivery = [
    {
      name: "_id",
      label: "id",
      options: {
        display: "excluded",
        filter: true,
        setCellHeaderProps: () => ({}),
      },
    },
    {
      name: "plat_no",
      label: i18n.t("plat_no"),
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
      },
    },
    {
      name: "driver",
      label: i18n.t("driver"),
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
      },
    },
    {
      name: "kenek",
      label: i18n.t("kenek"),
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
      },
    },
    {
      name: "customer",
      label: i18n.t("customer"),
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
      },
    },
    {
      name: "asal",
      label: i18n.t("asal"),
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
      },
    },
    {
      name: "jumlah_surat_jalan",
      label: i18n.t("jumlah_surat_jalan"),
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
      },
    },
    {
      name: "jenis_barang",
      label: i18n.t("jenis_barang"),
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
      },
    },
    {
      name: "delivery_update",
      label: i18n.t("delivery_update"),
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
        customBodyRender: (value) => value.status_delivery,
      },
    },
    {
      name: "createdAt",
      label: i18n.t("Waktu"),
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              {new Date(value).toLocaleTimeString("id-ID") +
                " - " +
                new Date(value).toLocaleDateString("id-ID")}
            </div>
          );
        },
        filter: true,
        setCellHeaderProps: () => ({}),
        width: "5em",
      },
    },
  ];

  return (
    <>
      <div class="m-3 p-3 bg-[var(--warna-14)] border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-2xl font-bold mb-2 text-[var(--warna-9)]">
          Data All Delivery
        </h2>
        <div className="widget-content">
          <DataTable
            title="Data All Delivery"
            data={delivery}
            columns={columnsDelivery}
          />
        </div>
      </div>
    </>
  );
};

export default AllDelivery;
