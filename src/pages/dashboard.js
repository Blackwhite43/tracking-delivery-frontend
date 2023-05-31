import Dashboard from "@/pages-components/Dashboard";
import i18n from "@/services/i18n";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      const storedStatus = localStorage.getItem("no_plat");

      if (storedStatus === "bangkit2023") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/login");
      }
    }

    setTimeout(() => {
      router.push("/");
      console.log("dipanggil setelah 2 detik");
    }, 2000);
  });

  return (
    <>
      <Head>
        <title>{i18n.t("dashboard")}</title>
      </Head>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
