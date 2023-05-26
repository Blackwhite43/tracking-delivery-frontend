import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};
function DeliveryContent(props) {
  const {
    del_id,
    plat_no,
    driver,
    kenek,
    customer,
    asal,
    jumlah_surat_jalan,
    jenis_barang,
    instruksi,
    delivery_update,
  } = props;
  // console.log(delivery_update);
  const router = useRouter();
  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: `/all-delivery/${del_id}`,
      query: {
        id: del_id,
      },
    });
  });
  return (
    <>
      <div class="flex justify-center mt-10">
        <div class="p-4 max-w-sm">
          <div
            class={`flex rounded-lg h-full ${
              delivery_update == "Ready for Delivery"
                ? "bg-teal-400"
                : delivery_update == "Not Delivered"
                ? "bg-red-500"
                : delivery_update == "Out for Delivery"
                ? "bg-yellow-400"
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
      </div>
    </>
  );
}
export default DeliveryContent;
