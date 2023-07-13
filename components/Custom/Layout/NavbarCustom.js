import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BahasaSwitcher from "../../BahasaSwitcher/BahasaSwitcher";
import Image from "next/image";
import ThemeSwitcher from "../../ThemeSwitcher";
import NavBar from "@/components/layout/NavBar";
import moment from "moment";
const NavbarCustom = () => {
  const router = useRouter();
  const [Time, setTime] = useState([]);
  function handleLogout() {
    localStorage.removeItem("no_plat"); //hapus local storage
    router.reload("/login");
  }
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const toggleDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [thema, setThema] = useState("dark");
  let storedStatus, themaStatus;
  if (typeof window !== "undefined") {
    storedStatus = localStorage.getItem("no_plat");
    themaStatus = localStorage.getItem("theme");
  }
  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const { localStorage } = window;
      // Cek status login saat komponen dimuat
      
      if (themaStatus === "dark") {
        setThema("dark");
      } else {
        setThema("light");
      }
      if (storedStatus) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/login");
      }
    // }
  }, [storedStatus]);

  const [data, setData] = useState(null);

  useEffect(() => {
    // Cek apakah localStorage tersedia di browser
    if (typeof window !== "undefined") {
      // Mengambil data dari localStorage
      const localStorageData = window.localStorage.getItem("no_plat");

      // Menyimpan data ke dalam state
      setData(localStorageData);
    }
  }, [storedStatus]);
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("DD-MM-YYYY HH:mm:ss"));
    }, 1)
  }, [])
  return (
    <div className="sticky top-0">
      {/*  BEGIN NAVBAR  */}
      {isLoggedIn === true && (
        <div className="header-container border-b-2">
          <header className="header border-b border-dashed border-indigo-800 flex justify-between navbar navbar-expand-sm w-full sticky top-0">
            <ul className="flex flex-row theme-brand text-center items-center ml-1">
              <li className="nav-item theme-logo">
                {data == "bangkit2023" ? (
                  <>
                    <Link href={`/dashboard/?plat_no=${data}`} locale={router.locale}>
                      <Image
                        width={150}
                        height={31.2}
                        src={`/templates/assets/img/${
                          thema === "dark"
                            ? "infiniti-4.0.png"
                            : "infiniti-4.0.png"
                        }`}
                        alt="logo"
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={`/?plat_no=${data}`} locale={router.locale}>
                      <Image
                        width={150}
                        height={31.2}
                        src={`/templates/assets/img/${
                          thema === "dark"
                            ? "infiniti-4.0.png"
                            : "infiniti-4.0.png"
                        }`}
                        alt="logo"
                      />
                    </Link>
                  </>
                )}
              </li>
              {/* <li className="nav-item theme-text">
                {data == "bangkit2023" ? (
                  <>
                    <Link
                      href={`/dashboard/?plat_no=${data}`}
                      locale={router.locale}
                      className="nav-link"
                    >
                      INFINITI GROUP
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/?plat_no=${data}`}
                      locale={router.locale}
                      className="nav-link"
                    >
                      INFINITI GROUP
                    </Link>
                  </>
                )}
              </li> */}
            </ul>
            <ul className="flex justify-center items-center gap-3 mr-3 max-lg:hidden">
              <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2 font-bold text-xl text-sky-500">
                INFINITIGROUP TRACKING & REPORT DELIVERY
              </li>
            </ul>
            <ul className="flex justify-center items-center gap-3 mr-3">
              {/* <BahasaSwitcher /> */}
              <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2">
                <ThemeSwitcher />
              </li>
              {/* <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2">
                <BahasaSwitcher />
              </li> */}
              <li className="nav-item dropdown user-profile-dropdown d-flex justify-content-center align-items-center ml-2 max-lg:text-xs">
                {data.toUpperCase()}
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
                      {/* <div className="dropdown-item">
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
                      </div> */}

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
        </div>
      )}
      {/*  END NAVBAR  */}
      <NavBar />
    </div>
  );
};

export default NavbarCustom;
