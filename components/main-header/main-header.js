import Link from "next/link";
import logoImg from '@/assets/logo.jpg';
import classes from '@/components/main-header/main-header.module.css';
import Image from "next/image";
import MainHeaderBackgroundPage from "./main-header-background";
import NavLink from "./nav-link";

function MainHeaderPage() {
    return ( 
        <>
            <MainHeaderBackgroundPage />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt='4-Ten_food Logo' priority/>
                    4-ten Food Recipes
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'>
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default MainHeaderPage;