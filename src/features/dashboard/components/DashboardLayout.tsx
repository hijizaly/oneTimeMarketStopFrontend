import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom"; // Needed for rendering nested routes
import styles from "../styles/DashboardLayout.module.css";
import {useQueryClient} from "react-query";
import {authLocalStorage} from "../../../common/utilities/authLocalStorage.ts";
import {logoutRequest} from "../../auth/hooks/useAuth.ts";

const DashboardLayout: React.FC = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const logOutFunction = () => {
        navigate('/')
        logoutRequest()
            .then(() => {
                authLocalStorage.resetLocalStorage()
                navigate('/')
                queryClient.clear()
            })
            .catch(() => {
                // console.log('E L', e)
                authLocalStorage.resetLocalStorage()
                navigate('/')
                queryClient.clear()
            })
    }

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h2 className={styles.logo}>MyApp</h2>
                <nav className={styles.nav}>
                    <Link to="/dashboard" className={styles.link}>Dashboard</Link>
                    <Link to="/profile" className={styles.link}>Profile</Link>
                    <Link to="/settings" className={styles.link}>Settings</Link>
                </nav>
            </aside>

            <div className={styles.mainContent}>
                <nav className={styles.navbar}>
                    <h3>Dashboard</h3>
                    <div>
                        <button className={styles.button} onClick={()=>logOutFunction()}>Logout</button>
                    </div>
                </nav>

                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;