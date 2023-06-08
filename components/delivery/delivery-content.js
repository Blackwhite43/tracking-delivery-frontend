import { useRouter } from "next/router";
import { useState } from "react";
const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};
function DeliveryContent(props) {
  const {del_id, plat_no, driver, kenek, customer, asal, jumlah_surat_jalan, jenis_barang, instruksi, delivery_update} = props;
  // console.log(delivery_update);
  const router = useRouter();
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
      <div className="mt-3 items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full">
            <div className="bg-[var(--warna-14)] rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div
                className={`rounded-lg p-4 ${
                  delivery_update == "Ready for Delivery"
                    ? "bg-sky-400"
                    : delivery_update == "Not Delivered"
                    ? "bg-red-500"
                    : delivery_update == "Delivered"
                    ? "bg-green-400"
                    : ""
                } flex flex-col`}
              >
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

      {/* <div class="flex justify-center mt-2">
        <div class="p-4 max-w-sm">
          <div
            class={`flex rounded-lg h-full ${
              delivery_update == "Ready for Delivery"
                ? "bg-sky-400"
                : delivery_update == "Not Delivered"
                ? "bg-red-500"
                : delivery_update == "Delivered"
                ? "bg-green-400"
                : ""
            } p-8 flex-col`}
          >
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-white text-lg font-medium">{customer}</h2>
            </div>

            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-white">
                      Asal
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white text-white">
                    {asal}
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-white">
                      Jumlah Surat Jalan
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white text-white">
                    {jumlah_surat_jalan}
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-white">
                      Jenis Barang
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white text-white">
                    {jenis_barang}
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-white">
                      Status Delivery
                    </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white text-white">
                    {delivery_update}
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white text-white">
                      *Instruksi:
                    </p>
                  </div>
                </div>
                <p class="text-base text-gray-700 dark:text-white text-white">
                  {instruksi}
                </p>
              </li>
            </ul>

            <div class="flex items-center justify-end">
              <a
                onClick={handleSubmit}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Detail
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default DeliveryContent;
