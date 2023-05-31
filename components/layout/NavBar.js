import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LogoAris from "@/assets/icons/LogoAris";
// import BahasaSwitcher from "../BahasaSwitcher/BahasaSwitcher";
// import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
let temp_data = [];
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  if (router.query.plat_no) {
    temp_data[0] = router.query.plat_no;
  }
  if (router.query.id) {
    temp_data[1] = router.query.id;
  }
  // console.log(temp_data[0], temp_data[1]);
  const newLocal = "/dashboard";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataLocal, setDataLocal] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const storedStatus = localStorage.getItem("no_plat");
      setDataLocal(storedStatus);
      console.log("cuiii", storedStatus);
      if (storedStatus) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/login");
      }
    }
  }, []);

  return (
    <nav className="w-full bg-[var(--warna-1)] shadow">
      <div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:flex gap-x-3">
            {/* <Link href={newLocal} locale={router.locale}> */}
            {/* <Image
                width={50}
                height={50}
                src={`/templates/assets/img/logoarisWarna.png`}
                alt="logo"
              /> */}
            {/* <LogoAris />
            </Link>
            <Link href={`/?plat_no=${temp_data[0]}`}>
              <h2 className="text-lg font-bold text-white">
                Tracking Delivery
              </h2>
            </Link> */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {isLoggedIn === true && (
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link href={`/?plat_no=${dataLocal}`}>Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link href={`/all-delivery/?plat_no=${dataLocal}`}>
                    All Delivery
                  </Link>
                </li>
                {/* <li className="text-white hover:text-indigo-200">
                <a href="#">Contact US</a>
              </li> */}
              </ul>
            )}
            <div className="mt-3 space-y-2 xl:hidden lg:hidden md:hidden">
              {isLoggedIn === false && (
                <Link
                  href="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* <BahasaSwitcher /> */}
          {/* <ThemeSwitcher /> */}
          {isLoggedIn === false && (
            <div className="hidden space-x-2 md:inline-block">
              <Link
                href="/login"
                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
