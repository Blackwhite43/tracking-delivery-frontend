import { Fragment } from "react";
// import MainHeader from "./main-header";
import NavBar from "./NavBar";
import NavbarCustom from "@/components/Custom/Layout/NavbarCustom";

function Layout(props) {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <NavbarCustom />
      <NavBar />
      <main style={{ backgroundColor: "var(--background)" }}>
        {props.children}
      </main>
    </Fragment>
  );
}
export default Layout;
