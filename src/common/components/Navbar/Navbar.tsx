import React from "react";
import styles from "./Navbar.module.css";
import {useNavigate} from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate()


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}></div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={()=>navigate('/signUp')}>Sign Up</button>
                <button className={styles.button} onClick={()=>navigate('/login')}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;