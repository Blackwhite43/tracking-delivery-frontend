import Link from "next/link";
import classes from "./main-header.module.css";
import { useRouter } from "next/router";
let temp_data = [];
function MainHeader() {
    const router = useRouter();
    const data = router.query;
    if (router.query.plat_no) {
        temp_data[0] = router.query.plat_no
    }
    if (router.query.id) {
        temp_data[1] = router.query.id
    }
    // console.log(temp_data);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={`/?plat_no=${temp_data[0]}`}>Tracking Delivery</Link>
            </div>
            <nav className={classes.navigation}>
                <Link href={`/all-delivery/?plat_no=${temp_data[0]}`}>All Delivery</Link>
            </nav>
            <nav className={classes.navigation}>
                <Link href='/login'>Login</Link>
            </nav>
        </header>
    )
}
export default MainHeader;