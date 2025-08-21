"use client"

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.logincontainer}>
        <div className={styles.col1}>
            <Image src="/loginbg.png" width={400} height={500} alt="bg"></Image>
        </div>
        <div className={styles.col2}>
            <div className={styles.top}>
                <form>
                    <Image src="/hexlogo.png" width={150} height={100} alt="logo"></Image>
                    <p>username</p>
                    <input type="text"></input>
                    <p>password</p>
                    <input type="password"></input>
                    <button type="submit">Login</button>
                </form>
                <div className={styles.col11}>
                        <div className={styles.remem}>
                            <input type="radio" className={styles.radio}></input>
                            <p>Remember Me</p>
                        </div>
                        <p>Forget Password</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>don't have any account</p>
                <Link href="/register"><p className={styles.signup}>sign up</p></Link>
            </div>
        </div>
    </div>
  )
}
