export function get_information (data) {
    let index = 0;
    let delivered = 0;
    let plat, driver, kenek;
    let temp = [];
    if (data != 0) {
        plat = data[0].plat_no;
        driver = data[0].driver;
        kenek = data[0].kenek;
        data.map(item => {
            if (item.delivery_update.status_delivery == "Delivered") {
                delivered++;
            }
            index++;
        })
    }
    temp['plat_no'] = plat;
    temp['driver'] = driver;
    temp['kenek'] = kenek;
    temp['index'] = index;
    temp['delivered'] = delivered;
    return temp;
}