import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
function Create_data(props) {
    const router = useRouter();
    const handleCreate = (event) => {
        event.preventDefault();
        axios.post(`${process.env.URL}/api/v1/admin/`, {
            plat_no: document.getElementById("plat_no").value.toUpperCase(),
            driver: document.getElementById("driver").value,
            kenek: document.getElementById("kenek").value,
            customer: document.getElementById("customer").value,
            asal: document.getElementById("asal").value,
            jumlah_surat_jalan: document.getElementById("jumlah_surat_jalan").value,
            jenis_barang: document.getElementById("jenis_barang").value,
            instruksi: document.getElementById("instruksi").value,
            tanggal: Date.now()
        })
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
    return (
        <>
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Create Delivery Data
                    </h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Plat No.
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="plat_no"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Driver
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="driver"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Kenek
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="kenek"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Customer
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="customer"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Asal
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="asal"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Jumlah Surat Jalan
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="jumlah_surat_jalan"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Jenis Barang
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="jenis_barang"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Instruksi
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white border">
                                    <form>
                                        <input type="text" id="instruksi"></input>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center justify-end mt-5 pt-5">
                            <button
                                onClick={handleCreate}
                                class="btn-rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Create Data
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Create_data;