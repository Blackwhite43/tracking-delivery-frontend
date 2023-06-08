import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18n from "@/services/i18n";
import DataTable from "@/components/DataTable";
import axios from "axios";
import Link from "next/link";

const AllDelivery = () => {
  const router = useRouter();
  const [delivery, setDelivery] = useState([]);
  const handleSubmit = (event) => { // Tidak mau langsung update jika di klik sekali
    event.preventDefault();
    const buttons = document.getElementsByTagName("button");
    const buttonPressed = e => {
      axios.patch(`${process.env.URL}/api/v1/admin/${e.target.id}`, {
        verification: "Verified by Delivery Team"
      })
      .then((res) => {
        if (res.data.status == "success") {
          alert(res.data.status);
          router.reload({
            pathname: "/delivery"
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
    }
  }
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
        filter: false,
        setCellHeaderProps: () => ({}),
      },
    },
    {
      name: "plat_no",
      label: i18n.t("Plat No."),
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
      label: i18n.t("Driver"),
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
      name: "kenek",
      label: i18n.t("Kenek"),
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
      name: "customer",
      label: i18n.t("Customer"),
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
      name: "asal",
      label: i18n.t("Asal"),
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
      label: i18n.t("Jumlah Surat Jalan"),
      options: {
        filter: false,
        setCellHeaderProps: () => ({
          style: {
            fontSize: "4em",
          },
        }),
        setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        width: "1em",
        fontSize: "4em",
      },
    },
    {
      name: "jenis_barang",
      label: i18n.t("Jenis Barang"),
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
      name: "delivery_update",
      label: i18n.t("Status Delivery"),
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
      label: i18n.t("Created Date"),
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              {new Date(value).toLocaleTimeString("id-ID") +
                " - " +
                new Date(value).toLocaleDateString("id-ID")}
            </div>
          )
        },
        filter: false,
        setCellHeaderProps: () => ({}),
        width: "5em",
      },
    },
    {
      name: "delivery_update",
      label: i18n.t("Detail Delivery"),
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              <Link className="text-blue-500" href={`/all-delivery/${value._id}`}>
                Details
              </Link>
            </div>
          )
        },
        filter: false
      },
    },
    {
      name: "delivery_update",
      label: i18n.t("Detail Delivery"),
      options: {
        customBodyRender: (value) => {
          return (
            <button
              id={value._id}
              onClick={handleSubmit}
              class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Verify Delivery
            </button>
          )
        },
        filter: false
      },
    }
  ];

  return (
    <>
      <div class="m-3 p-3 bg-[var(--warna-14)] border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
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
