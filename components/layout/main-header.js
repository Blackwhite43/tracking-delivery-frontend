import Link from "next/link";
import classes from "./main-header.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let temp_data = [];
function MainHeader() {
  const router = useRouter();
  const data = router.query;
  console.log("From header");
  if (router.query.plat_no) {
    temp_data[0] = router.query.plat_no;
  }
  if (router.query.id) {
    temp_data[1] = router.query.id;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const storedStatus = localStorage.getItem("no_plat");
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
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={`/?plat_no=${temp_data[0]}`}>Tracking Delivery</Link>
      </div>
      <nav className={classes.navigation}>
        <Link href={`/all-delivery/?plat_no=${temp_data[0]}`}>
          All Delivery
        </Link>
      </nav>
      {/* {isLoggedIn === false && ( */}
      <nav className={classes.navigation}>
        <Link href="/login">Login</Link>
      </nav>
      {/* )} */}
    </header>
  );
}
export default MainHeader;
