import React from "react";
import styles from "./Navbar.module.css";
import {useNavigate} from "react-router-dom";

const NavbarPrivate: React.FC = () => {
    const navigate = useNavigate()


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}></div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={()=>navigate('/logout')}>Log out</button>
            </div>
        </nav>
    );
};

export default NavbarPrivate;