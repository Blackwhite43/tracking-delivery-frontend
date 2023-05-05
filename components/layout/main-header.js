import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>Tracking Delivery</Link>
            </div>
            <nav className={classes.navigation}>
                <Link href='/all-delivery'>All Delivery</Link>
            </nav>
            <nav className={classes.navigation}>
                <Link href='/login'>Login</Link>
            </nav>
        </header>
    )
}
export default MainHeader;