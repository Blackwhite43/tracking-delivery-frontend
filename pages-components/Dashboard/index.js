import EventsSearch from "@/components/Admin/event-search";
import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import classes from "./event-search.module.css";
import { useRouter } from "next/router";
import moment from "moment";

const Dashboard = (props) => {
  const {del_id, plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update, tanggal} = props;
  const [Statistics, setStatistics] = useState([]);
  const [dataDelivery, setDataDelivery] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(true);
  
  function refreshDataDelivery(startDate, endDate) {
    // console.log("ini", startDate, endDate);
    var dataSearch = {
      date_start: startDate,
      date_end: endDate,
    };
    axios.post(`${process.env.URL}/api/v1/admin/custom-dates`, dataSearch)
    .then((hsl) => {
      if (hsl.data.data.length < 1) {
        setDataAvailable(false);
      } else {
        setDataDelivery(hsl.data.data);
        setDataAvailable(true);
      }
    });
    axios.post(`${process.env.URL}/api/v1/admin/stats`, dataSearch)
    .then((hsl) => {
        setStatistics(hsl.data.data);
    });
  }
  useEffect(() => {
    var getDate = new Date();
    var currentDate = getDate.toISOString().split("T")[0];
    var dataSearch = {
      date_start: currentDate,
      date_end: currentDate,
    };
    axios.post(`${process.env.URL}/api/v1/admin/custom-dates`, dataSearch)
    .then((hsl) => {
      if (hsl.data.data.length < 1) {
        setDataAvailable(false);
      } else {
        setDataDelivery(hsl.data.data);
        setDataAvailable(true);
      }
    });
    axios.post(`${process.env.URL}/api/v1/admin/stats`, dataSearch)
    .then((hsl) => {
        setStatistics(hsl.data.data);
    });
  }, []);
  var delivered = 0, ready_for_delivery = 0, not_delivered = 0;
  Statistics.map(idx => {
    ready_for_delivery += idx.ready_for_delivery;
    delivered += idx.delivered;
    not_delivered += idx.not_delivered;
  })
  return (
    <div>
      <div class="p-2 bg-[var(--warna-14)] border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-2xl font-bold mb-2 text-[var(--warna-9)]">
          Statistics
        </h2>
        <ul className="grid-cols-2 flex justify-between">
          <li className="sm:py-4 list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate">
                  Sisa Pengiriman:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {ready_for_delivery}
                </p>
              </div>
            </div>
          </li>
          <li className="sm:py-4  list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate">
                  Terkirim:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {delivered}
                </p>
              </div>
            </div>
          </li>
          <li className="sm:py-4 list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate">
                  Tidak Terkirim
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {not_delivered}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <EventsSearch onSearch={refreshDataDelivery} />
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {dataAvailable ? (
          dataDelivery?.map((dataList, idx) => {
            return (
              <KomponenCard
                key={idx}
                id={idx}
                plat_no={dataList.plat_no}
                customer={dataList.customer}
                asal={dataList.asal}
                jumlah_surat_jalan={dataList.jumlah_surat_jalan}
                jenis_barang={dataList.jenis_barang}
                instruksi={dataList.instruksi}
                delivery_update={dataList.delivery_update.status_delivery}
                del_id={dataList.delivery_update._id}
                tanggal={dataList.tanggal}
              />
            );
          })
        ) : (
          <>
            <h1>Data tidak tersedia</h1>
          </>
        )}
      </div>
    </div>
  );
};

export function KomponenCard(props) {
  const router = useRouter();
  const {del_id, plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update, tanggal} = props;
  var toLocal = moment(tanggal).format("DD-MM-YYYY");
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };
  const handleSubmit = preventDefault(() => {
    setShowModal(false);
    router.push({
      pathname: `/all-delivery/${del_id}`,
      query: {
        id: del_id,
      },
    });
  });

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="mx-4 mt-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        id={props._id}
      >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full">
            <div className="bg-[var(--warna-14)] rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div
                className={`rounded-lg p-4 flex flex-col
                ${
                  delivery_update == "Ready for Delivery"
                    ? "bg-sky-400"
                    : delivery_update == "Not Delivered"
                    ? "bg-red-500"
                    : delivery_update == "Delivered"
                    ? "bg-green-400"
                    : ""
                }`}
              >
                <div className="grid-cols-2 flex justify-end">
                  <h5 className="text-white text-1xl font-bold leading-none">
                      {toLocal}
                  </h5>
                </div>
                <div className="grid-cols-2 flex justify-start">
                  <h5 className="text-white text-2xl font-bold leading-none">
                      {plat_no}
                  </h5>
                </div>
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none ">
                    {customer}
                  </h5>
                  <span className="text-xs text-black-900 font-bold leading-none">
                    {asal}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium hover:text-gray-900 truncate dark:text-white text-white">
                        Surat Jalan: {jumlah_surat_jalan}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="bg-[var(--warna-6)] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">{customer}</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative flex-auto">
                      <div class="flex justify-center mt-2">
                        <div class="max-w-sm">
                          <div class={`flex rounded-lg h-full p-8 flex-col`}>
                            <ul
                              role="list"
                              class="divide-y divide-gray-200 dark:divide-gray-700"
                            >
                              <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                  <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Asal
                                    </p>
                                  </div>
                                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {asal}
                                  </div>
                                </div>
                              </li>
                              <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                  <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Jumlah Surat Jalan
                                    </p>
                                  </div>
                                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {jumlah_surat_jalan}
                                  </div>
                                </div>
                              </li>
                              <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                  <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Jenis Barang
                                    </p>
                                  </div>
                                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {jenis_barang}
                                  </div>
                                </div>
                              </li>
                              <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                  <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Status Delivery
                                    </p>
                                  </div>
                                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {delivery_update}
                                  </div>
                                </div>
                              </li>
                              <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                  <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      *Instruksi:
                                    </p>
                                  </div>
                                </div>
                                <p class="text-base text-gray-700 dark:text-white">
                                  {instruksi}
                                </p>
                              </li>
                            </ul>
                            {/* <div class="flex items-center justify-end">
                          <a
                            onClick={handleSubmit}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Detail
                          </a>
                        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        // onClick={() => setShowModal(false)}
                        onClick={handleSubmit}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export function KomponenSearch(props) {
  return (
    <form
      className={`classes.form flex pt-7 pb-5 justify-center`}
      onSubmit={submitHandler}
    >
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="startDate">Start date</label>
          <input
            type="date"
            id="startDate"
            ref={startDateInputRef}
            onChange={(e) => {
              setStartDate(e.value.startDate);
              // console.log({ startDate });
            }}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="endDate">End date</label>
          <input
            type="date"
            id="endDate"
            ref={endDateInputRef}
            onChange={(e) => {
              setEndDate(e.value.endDate);
              // console.log({ endDate });
            }}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        </div>
      </div>
      <button className="w-28 rounded-lg font-bold p-1 bg-[var(--warna-6)] text-[var(--warna-3)] hover:bg-grey-700">
        Finds Events
      </button>
    </form>
  );
}

export default Dashboard;
