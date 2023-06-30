import axios from "axios";
import { useRouter } from "next/router";
import { eventNames } from "process";
import { useState } from "react";
import LinearProgressWithLabel from "./progress-bar";
import Box from '@mui/material/Box';
function DeliveryContent(props) {
  const router = useRouter();
  const [StatusOnChange, setStatusOnChange] = useState();
  const [Message, setMessage] = useState();
  const [Edit, setEdit] = useState(false);
  const [progress, setProgress] = useState();
  const [showModal, setShowModal] = useState(false);
  const {del_id, plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update, photo, verification, reason} = props;
  function get_onchange_status() {
    setStatusOnChange(document.getElementById("status").value);
  }
  function get_onchange_message() {
    setMessage(document.getElementById("message").value);
  }
  function get_edit() {
    if (Edit == true) {
      setEdit(false);
    }
    else {
      setEdit(true)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    let message;
    if (document.getElementById("status").value == "Delivered") {
      message = "Delivered"
    }
    else {
      if (document.getElementById("message").value == "Lainnya") {
        message = document.getElementById("extra_message").value;
      }
      else {
        message = document.getElementById("message").value;
      }
    }
    const data = {
      status_delivery: document.getElementById("status").value,
      photo: document.getElementById("myfile").files[0],
      reason: message
    }
    const config = {
      onUploadProgress: progressEvent => setProgress(Math.round(progressEvent.loaded * 100) / progressEvent.total)
    }
    if (progress == 100) {
      setShowModal(false);
    }
    axios.patchForm(`${process.env.URL}/api/v1/user/update-delivery/${del_id}`, data, config)
    .then((res) => {
      if (res.data.status == "success") {
        alert(res.data.status);
        router.reload({
          pathname: `/${del_id}`,
          query: {
            plat_no: plat_no,
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const handle_delete = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.URL}/api/v1/admin/${del_id}`)
    .then((res) => {
      if (res.data.status == "success") {
        alert(res.data.status);
        router.push({
          pathname: `/delivery`
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const handleSubmit_admin = (event) => {
    event.preventDefault();
    if (Edit == true) {
      axios.patch(`${process.env.URL}/api/v1/admin/${del_id}`, {
        plat_no: document.getElementById("plat_no").value,
        driver: document.getElementById("driver").value,
        kenek: document.getElementById("kenek").value,
        customer: document.getElementById("customer").value,
        asal: document.getElementById("asal").value,
        jumlah_surat_jalan: document.getElementById("jumlah_surat_jalan").value,
        jenis_barang: document.getElementById("jenis_barang").value,
        instruksi: document.getElementById("instruksi").value,
        verification: document.getElementById("verification").value
      })
      .then((res) => {
        if (res.data.status == "success") {
          alert(res.data.status);
          router.reload({
            pathname: `/${del_id}`,
            query: {
              plat_no: plat_no,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else {
      axios.patch(`${process.env.URL}/api/v1/admin/${del_id}`, {
        verification: document.getElementById("verification").value
      })
      .then((res) => {
        if (res.data.status == "success") {
          alert(res.data.status);
          router.reload({
            pathname: `/${del_id}`,
            query: {
              plat_no: plat_no,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
  const handler_getfile = (event) => {
    event.preventDefault();
    axios.get(`${process.env.URL}/api/v1/user/get-files/${del_id}`)
    .then(res => {
      router.push({
        pathname: `https://drive.google.com/file/d/${res.data.id}/view`
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  let storedStatus = localStorage.getItem("no_plat");
  if (typeof window !== "undefined") {
    storedStatus = window.localStorage.getItem("no_plat");
  }
  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Details Delivery
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {storedStatus == "bangkit2023" ? (
              <>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Plat No.
                      </p>
                    </div>
                    {Edit == true ? (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                        <form>
                          <input type="text" id="plat_no" defaultValue={plat_no}></input>
                        </form>
                      </div>
                    ) : (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {plat_no}
                      </div>
                    )}
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Driver
                      </p>
                    </div>
                    {Edit == true ? (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                        <form>
                          <input type="text" id="driver" defaultValue={driver}></input>
                        </form>
                      </div>
                    ) : (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {driver}
                      </div>
                    )}
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Kenek
                      </p>
                    </div>
                    {Edit == true ? (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                        <form>
                          <input type="text" id="kenek" defaultValue={kenek}></input>
                        </form>
                      </div>
                    ) : (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {kenek}
                      </div>
                    )}
                  </div>
                </li>
              </>
            ) : (
              <></>
            )}
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Customer
                  </p>
                </div>
                {Edit == true ? (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                    <form>
                      <input type="text" id="customer" defaultValue={customer}></input>
                    </form>
                  </div>
                ) : (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {customer}
                  </div>
                )}
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Asal
                  </p>
                </div>
                {Edit == true ? (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                    <form>
                      <input type="text" id="asal" defaultValue={asal}></input>
                    </form>
                  </div>
                ) : (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {asal}
                  </div>
                )}
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Jumlah Surat Jalan
                  </p>
                </div>
                {Edit == true ? (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                    <form>
                      <input type="text" id="jumlah_surat_jalan" defaultValue={jumlah_surat_jalan}></input>
                    </form>
                  </div>
                ) : (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {jumlah_surat_jalan}
                  </div>
                )}
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Jenis Barang
                  </p>
                </div>
                {Edit == true ? (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                    <form>
                      <input type="text" id="jenis_barang" defaultValue={jenis_barang}></input>
                    </form>
                  </div>
                ) : (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {jenis_barang}
                  </div>
                )}
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Instruksi
                  </p>
                </div>
                {Edit == true ? (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                    <form>
                      <input type="text" id="instruksi" defaultValue={instruksi}></input>
                    </form>
                  </div>
                ) : (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {instruksi}
                  </div>
                )}
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Status Delivery
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button class="btn btn-primary btn-rounded mb-2">
                    {delivery_update}
                  </button>
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Alasan
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {reason == undefined ? (
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Belum diisi
                    </div>
                  ) : (
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {reason}
                    </div>
                    )
                  }
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Status Verification
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button class="btn btn-primary btn-rounded mb-2">
                    {verification}
                  </button>
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Photo
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {photo != "" ?
                    <button
                      class="btn btn-primary btn-rounded mb-2"
                      onClick={handler_getfile}
                    >
                      Foto
                    </button>
                    : 
                    <p
                      class="btn btn-primary btn-rounded mb-2"
                    >
                    Tidak ada Foto
                    </p>
                  }
                </div>
                
              </div>
              {storedStatus == "bangkit2023" ? (
                  <></>
                ) : verification != "Verified by Delivery Team" ? (
                  <form>
                    <input type="file" id="myfile" name="myfile"></input>
                  </form>
                ) : (
                  <></>
                )}
            </li>
            {storedStatus == "bangkit2023" ? (
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Update Status Verification
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <select name="status" id="verification">
                      <option value="Pending">Pending</option>
                      <option value="Verified by Delivery Team">Verified by Delivery Team</option>
                    </select>
                  </div>
                </div>
              </li>
            ) : verification != "Verified by Delivery Team" ? (
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Update Status Delivery
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <select name="status" id="status" onChange={get_onchange_status}>
                      {/* <option value="Ready for Delivery">Ready for Delivery</option> */}
                      <option value="Delivered">Delivered</option>
                      <option value="Not Delivered">Not Delivered</option>
                    </select>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}
            {storedStatus != "bangkit2023" && StatusOnChange == "Not Delivered" ? (
              <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Message</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <select name="status" id="message" onChange={get_onchange_message}>
                    <option value="Waktu tak terkejar">Waktu tak terkejar</option>
                    <option value="Customer libur">Customer libur</option>
                    <option value="Salah barang">Salah barang</option>
                    <option value="Barang NG">Barang NG</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
            </li>
            ) : (
              <></>
            )}
            {storedStatus != "bangkit2023" && Message == "Lainnya" ? (
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Input Message</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                    <form>
                      <input type="text" id="extra_message"></input>
                    </form>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}
            <li class={`flex items-center ${storedStatus == "bangkit2023" ? "justify-between" : "justify-end"} mt-5 pt-5`}>
              {storedStatus == "bangkit2023" ? (
                <>
                  {Edit == false ? (
                    <button
                    onClick={get_edit}
                    class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit Data
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={get_edit}
                        class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Exit Edit Data
                      </button>
                      <button
                        onClick={handle_delete}
                        class="btn-rounded text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Delete Data
                      </button>
                    </>
                  )}
                  
                  <button
                    onClick={handleSubmit_admin}
                    class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
                </>
                
              ) : verification != "Verified by Delivery Team" ? (
                <button
                  onClick={handleSubmit}
                  class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                </button>
              ) : (
                <></>
              )}
            </li>
          </ul>
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
                  <h3 className="text-3xl font-semibold">Progress</h3>
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
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <Box sx={{ width: '100%' }}>
                                  <LinearProgressWithLabel value={progress} />
                                </Box>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default DeliveryContent;
