import { useEffect } from "react";
import { useRouter } from "next/router";
import Custom404Main from "@/pages-components/Custom404Main";
import Head from "next/head";
import i18n from "../../services/i18n";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      console.log("dipanggil setelah 2 detik");
    }, 2000);
  });

  return (
    <>
      <Head>
        <title>{i18n.t("halaman tidak ditemukan")}</title>
      </Head>
      <Custom404Main />
    </>
  );
}
