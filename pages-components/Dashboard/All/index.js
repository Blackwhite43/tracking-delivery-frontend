import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18n from "@/services/i18n";
import DataTable from "@/components/DataTable";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";
import Link from "next/link";
import EventsSearch from "@/components/Admin/event-search";

const AllDelivery = () => {
  var array = [];
  const router = useRouter();
  const [delivery, setDelivery] = useState([]);
  const handleSubmit = (event) => {
    if (event.target.checked == true) {
      array.push(event.target.id);
    }
    else if (event.target.checked == false) {
      array.pop(event.target.id);
    }
  }
  const handleVerify = (event) => {
    array.map(index => {
      axios.patch(`${process.env.URL}/api/v1/admin/${index}`, {
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
    })
  }
  const handleDelete = (event) => {
    array.map(index => {
      axios.delete(`${process.env.URL}/api/v1/admin/${index}`)
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
    })
  }
  const handlePush = (event) => {
    event.preventDefault();
    router.push("/all-delivery/create");
  }

  function refreshDataDelivery(startDate, endDate) {
    // console.log("ini", startDate, endDate);
    var dataSearch = {
      date_start: startDate,
      date_end: endDate,
    };
    axios.post(`${process.env.URL}/api/v1/admin/custom-dates`, dataSearch).then((hsl) => {
      setDelivery(hsl.data.data);
    });
  }
  
  useEffect(() => {
    var getDate = new Date();
    var currentDate = getDate.toISOString().split("T")[0];
    var dataSearch = {
      date_start: currentDate,
      date_end: currentDate,
    };
    axios.post(`${process.env.URL}/api/v1/admin/custom-dates`, dataSearch).then((hsl) => {
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
            <div className="text-center">
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
      label: i18n.t("Update Verification"),
      options: {
        customBodyRender: (value) => {
          if (value.verification == "Verified by Delivery Team") {
            return (
              <div className="text-green-400">Verified</div>
            )
          }
          else {
            return (
              <FormControlLabel
                control={<Checkbox id={value._id} onChange={handleSubmit}/>}
                label= "Verification"
                labelPlacement="end"
              />
            )
          }
        },
        filter: false
      },
    }
  ];
  return (
    <>
      <div class="m-3 p-3 bg-[var(--warna-14)] border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between">
          <div class="text-2xl font-bold mb-2 text-[var(--warna-9)]">
            Data All Delivery
          </div>
          <div>
            <button
              onClick={handlePush}
              class="btn-rounded text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Data
            </button>
            <button
              onClick={handleVerify}
              class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Verify Delivery
            </button>
            <button
              onClick={handleDelete}
              class="btn-rounded text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete Data
            </button>
          </div>
        </div>
        <div className="widget-content">
          <EventsSearch onSearch={refreshDataDelivery} />
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
