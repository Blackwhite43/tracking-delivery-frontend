import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BahasaSwitcher from "../../BahasaSwitcher/BahasaSwitcher";
import Image from "next/image";
import ThemeSwitcher from "../../ThemeSwitcher";

const NavbarCustom = () => {
  const router = useRouter();
  function handleLogout() {}
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const toggleDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  return (
    <div>
      {/*  BEGIN NAVBAR  */}
      <div className="header-container z-[100] border-b-2">
        <header className="header border-b border-dashed border-indigo-800 flex justify-between navbar navbar-expand-sm">
          <ul className="flex flex-row theme-brand text-center items-center ml-1">
            <li className="nav-item theme-logo">
              <Link href="/dashboard" locale={router.locale}>
                <Image
                  width={50}
                  height={50}
                  src={`/templates/assets/img/logoarisWarna.png`}
                  alt="logo"
                />
              </Link>
            </li>
            <li className="nav-item theme-text">
              <Link
                href="/dashboard"
                locale={router.locale}
                className="nav-link"
              >
                INFINITI GROUP
              </Link>
            </li>
          </ul>

          <ul className="flex justify-center items-center gap-3 mr-3">
            {/* <BahasaSwitcher /> */}

            <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2">
              <ThemeSwitcher />
            </li>

            <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2">
              <BahasaSwitcher />
            </li>

            <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2">
              Ahmad Zaky
            </li>

            <li className="nav-item dropdown user-profile-dropdown">
              <a
                className="nav-link dropdown-toggle user rounded-circle"
                id="userProfileDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={toggleDropdown}
              >
                <Image
                  width={40}
                  height={40}
                  src={`/templates/assets/img/boy.png`}
                  className="rounded-circle"
                  alt="avatar"
                />
              </a>
              {isOpenProfile && (
                <div
                  className="fixed right-100 mt-2 dropdown-menu w-44"
                  aria-labelledby="userProfileDropdown"
                  style={{
                    right: "10px",
                    backgroundColor: "var(--warna-12)",
                  }}
                >
                  <div className="">
                    <div className="dropdown-item">
                      <Link
                        href="/data-setting"
                        locale={router.locale}
                        className="flex gap-3 text-[var(--warna-9)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user text-[var(--warna-9)]"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        My Profile
                      </Link>
                    </div>

                    <div className="dropdown-item">
                      <Link
                        href="/data-setting"
                        locale={router.locale}
                        className="flex gap-3 text-[var(--warna-9)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user text-[var(--warna-9)]"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        My Profile
                      </Link>
                    </div>

                    <div onClick={handleLogout} className="dropdown-item">
                      <Link
                        href="#"
                        locale={router.locale}
                        className="flex gap-3 text-[var(--warna-9)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-log-out text-[var(--warna-9)]"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </header>
        {/* <div class="grid grid-cols-3 gap-4 active:bg-red-800">
          <div className="bg-black">01</div>
          <div className="bg-black">02</div>
          <div className="bg-black">03</div>
          <div className="bg-black">04</div>
          <div className="bg-black">05</div>
          <div className="bg-black">06</div>
          <div className="bg-black">07</div>
          <div className="bg-black">08</div>
          <div className="bg-black">09</div>
          <div className="bg-black">10</div>
          <div className="bg-black">11</div>
          <div className="bg-black">12</div>
        </div> */}
      </div>
      {/*  END NAVBAR  */}
    </div>
  );
};

export default NavbarCustom;
