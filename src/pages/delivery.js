import AllDelivery from "@/pages-components/Dashboard/All";
import Head from "next/head";
import i18n from "@/services/i18n";

const AllDeliveryPage = () => {
  return (
    <>
      <Head>
        <title>{i18n.t("dashboard")}</title>
      </Head>
      <AllDelivery />
    </>
  );
};

export default AllDeliveryPage;
