import React from 'react';
import Link from "next/link";


import styles from "../styles/navbar.module.scss"
const Navbar = () => {
    return (
        <>

            <header className={styles.header}>
                <Link href="/">
                    <h1>Alton Ong</h1>
                </Link>
            </header>
        </>
    );
};

export default Navbar;
