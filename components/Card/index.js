import React from "react";

const index = () => {
  return (
    <>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 p-5">
        <div className="widget widget-table-one">
          <div className="widget-heading p-5">
            <h5 className="">Details Delivery</h5>
          </div>

          <div className="widget-content">
            <div className="transactions-list">
              <div className="t-item">
                <div className="t-company-name">
                  <div className="t-icon">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-home"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="t-name">
                    <h4>Plat No:</h4>
                  </div>
                </div>
                <div className="t-rate rate-dec">
                  <p>
                    <span>B 9161 FCD</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="transactions-list">
              <div className="t-item">
                <div className="t-company-name">
                  <div className="t-icon">
                    <div className="avatar avatar-xl">
                      <span className="avatar-title rounded-circle">SP</span>
                    </div>
                  </div>
                  <div className="t-name">
                    <h4>Driver:</h4>
                  </div>
                </div>
                <div className="t-rate rate-inc">
                  <p>
                    <span>Ali Sobana</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="transactions-list">
              <div className="t-item">
                <div className="t-company-name">
                  <div className="t-icon">
                    <div className="avatar avatar-xl">
                      <span className="avatar-title rounded-circle">AD</span>
                    </div>
                  </div>
                  <div className="t-name">
                    <h4>Kenek:</h4>
                  </div>
                </div>
                <div className="t-rate rate-inc">
                  <p>
                    <span>Saepul</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget widget-five">
          <div className="widget-content">
            <div className="header">
              <div className="header-body mt-[-10px]">
                <h6>Delivered</h6>
                <p className="meta-date">11 Mei 2023</p>
              </div>
            </div>

            <div className="w-content">
              <div className="">
                <p className="task-left">8</p>
                <p className="task-completed">
                  <span>12 Done</span>
                </p>
                <p className="task-hight-priority">
                  <span>3 Task</span> with High priotity
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="widget widget-five">
          <div className="widget-content">
            <div className="header">
              <div className="header-body  mt-[-10px]">
                <h6>Delivered</h6>
                <p className="meta-date">11 Mei 2023</p>
              </div>
            </div>

            <div className="w-content">
              <div className="">
                <p className="task-left">8</p>
                <p className="task-completed">
                  <span>12 Done</span>
                </p>
                <p className="task-hight-priority">
                  <span>3 Task</span> with High priotity
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="widget widget-account-invoice-one">
          <div className="widget-heading pt-5 pl-5">
            <h5 className="">TKG TAEKWANG</h5>
          </div>

          <div className="widget-content m-5">
            <div className="invoice-box">
              <div className="acc-total-info">
                <h5>Surat Jalan</h5>
                <p className="acc-amount">4</p>
              </div>

              <div className="inv-detail">
                <div className="info-detail-1">
                  <p>Asal</p>
                  <p>PT. CLS</p>
                </div>
                <div className="info-detail-2">
                  <p>Jenis Barang</p>
                  <p>Lain-Lain</p>
                </div>
                <div className="info-detail-3 info-sub">
                  <div className="info-detail">
                    <p>Status Delivery</p>
                    <p>Out for Delivery</p>
                  </div>
                  <div className="info-detail-sub">
                    <p>*Instruksi:</p>
                    <p>Instruksi nya panjang coi</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end p-5">
                <a href="#" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
