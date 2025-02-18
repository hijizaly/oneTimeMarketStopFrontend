import {NavbarPrivate} from "../../../common/components";
import React from "react";
import {useForm} from "react-hook-form";
import styles from "../styles/LoginPage.module.css";
import {LogInCredentialType} from "../../../common/types/auth.type.ts";
import {useAuthentication} from "../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import { useQueryClient } from 'react-query'
import {authLocalStorage} from "../../../common/utilities/authLocalStorage.ts";


const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInCredentialType>();

    const { mutate: authenticationMutation } = useAuthentication()


    const onSubmit = (data: LogInCredentialType) => {
        console.log("Login Data:", data);

        authenticationMutation(data, {
            onSuccess: (responseData) => {
                if (responseData?.status >= 200) {
                    console.log("R",responseData)

                    const currentUser = responseData.data
                    console.log("C",currentUser)

                    queryClient.setQueryData('CURRENT_USER', responseData)
                    authLocalStorage.resetLocalStorage() //RESET LOCAL STORAGE
                    authLocalStorage.setAccessToken(currentUser?.token.accessToken) //SET ACCESS TOKEN
                    authLocalStorage.setRefreshToken(currentUser?.token.accessToken) //SET REFRESH TOKEN
                    authLocalStorage.setUserDataPayload(currentUser) //SET USER DATA
                    //
                    switch (currentUser.role) {
                        case 'USER':
                            navigate('/dashboard')
                            break

                        default:
                            break
                    }
                }
            },
            onError: (_error) => {
                // console.log('E', _error.response.data.message)
                // @ts-ignore :RUSHING TO DEPLOYMENT
                alert(_error.response.data.message)

                // const e: { message: string; response: { data: { message: string } } } = _error

                // toastOpener(e?.response?.data.message, 'error')
                // toastOpener(`${e?.message}`, 'error')
            }
        })


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