import DeliveryContent from "./delivery-content";

function DeliveryList(props) {
  const { items, stats } = props;
  let plat, driver, kenek, delivered, ready_for_delivery, not_delivered;
  plat = stats._id?.plat_no;
  driver = stats._id?.driver;
  kenek = stats._id?.kenek;
  delivered = stats.delivered;
  ready_for_delivery = stats.ready_for_delivery;
  not_delivered = stats.not_delivered;
  return (
    <div>
      <div class="p-2 bg-[var(--warna-14)] border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-2xl font-bold mb-2 text-[var(--warna-9)]">
          Details Delivery
        </h2>
        <div className="grid grid-cols-3 gap-1">
          <li className="sm:py-4 list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate">
                  Plat No:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {plat}
                </p>
              </div>
            </div>
          </li>
          <li className="sm:py-4  list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate">
                  Driver:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {driver}
                </p>
              </div>
            </div>
          </li>
          <li className="sm:py-4 list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate">
                  Kenek:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {kenek}
                </p>
              </div>
            </div>
          </li>
          <li className="pb-0 sm:pt-4 list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate ">
                  Sisa Pengiriman:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {ready_for_delivery}
                </p>
              </div>
            </div>
          </li>
          <li className="sm:py-4 list-none">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--warna-9)] truncate ">
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
                <p className="text-sm font-medium text-[var(--warna-9)] truncate ">
                  Tidak Terkirim:
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {not_delivered}
                </p>
              </div>
            </div>
          </li>
        </div>
      </div>
      <div className="relative">
        <div className="w-full absolute grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {items?.map((item) => (
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
              verification={item.delivery_update.verification}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default DeliveryList;