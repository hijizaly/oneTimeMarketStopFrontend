import {useForm} from "react-hook-form";
import styles from "../styles/LoginPage.module.css";

type FormData = {
    fullname: string;
    email: string;
    mobile:string;
    password: string;

};


const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit  = (data: FormData)=>{
        console.log("Sign Up Data",data);
    }

    return (

        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h1>Sign Up</h1>

                <label>Full Name</label>
                <input
                    type="text"
                    {...register("fullname", {required: "Full name is required"})}
                    className={styles.input}
                />
                {errors.fullname && <p className={styles.error}>{errors.fullname.message}</p>}

                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {required: "Email is required"})}
                    className={styles.input}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                <label>Mobile</label>
                <input
                    type="tel"
                    {...register("mobile", {required: "Mobile number is required"})}
                    className={styles.input}
                />
                {errors.mobile && <p className={styles.error}>{errors.mobile.message}</p>}

                <label>Password</label>
                <input
                    type="password"
                    {...register("password", {required: "Password is required"})}
                    className={styles.input}
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
        </div>

    );
};

export default SignUpPage;