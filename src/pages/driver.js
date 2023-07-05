import Driver from "@/pages-components/Driver/index";
import Head from "next/head";
import i18n from "@/services/i18n";

const AllDeliveryPage = () => {
  return (
    <>
      <Head>
        <title>{i18n.t("dashboard")}</title>
      </Head>
      <Driver />
    </>
  );
};

export default AllDeliveryPage;
