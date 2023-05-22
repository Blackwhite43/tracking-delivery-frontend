import DeliveryContent from "./delivery-content";
import { get_information } from "../../components/get_information";

function DeliveryList(props) {
  const { items, stats } = props;
  let plat, driver, kenek, index, delivered;
  plat = get_information(stats).plat_no;
  driver = get_information(stats).driver;
  kenek = get_information(stats).kenek;
  delivered = get_information(stats).delivered;
  index = get_information(stats).index;

  return (
    <>
      <div className="w-full max-w-md p-12 bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
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
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Plat No:
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {plat}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Driver:
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {driver}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Kenek:
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {kenek}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Delivered:
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {delivered}
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Remaining Deliveries:
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {index - delivered}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <DeliveryContent
            // plat_no={item.plat_no}
            // driver={item.driver}
            // kenek={item.kenek}
            del_id={item.delivery_update._id}
            customer={item.customer}
            asal={item.asal}
            jumlah_surat_jalan={item.jumlah_surat_jalan}
            jenis_barang={item.jenis_barang}
            instruksi={item.instruksi}
            delivery_update={item.delivery_update.status_delivery}
            key={item._id}
          />
        ))}
      </div>
    </>
  );
}
export default DeliveryList;
