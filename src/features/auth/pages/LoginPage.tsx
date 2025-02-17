import {NavbarPrivate} from "../../../common/components";
import React from "react";
import {useForm} from "react-hook-form";
import styles from "../styles/LoginPage.module.css";

type FormData = {
    email: string;
    password: string;
};

const LoginPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Login Data:", data);
        // Handle login logic here
    };

    return (
        <>
            <NavbarPrivate/>

            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <h1>LOG IN</h1>

                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", {required: "Email is required"})}
                        className={styles.input}
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", {required: "Password is required"})}
                        className={styles.input}
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>


        </>
    );
};

export default LoginPage;