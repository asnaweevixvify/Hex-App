"use client"

import Image from "next/image"
import styles from "./page.module.css";

export default function Password() {
  return (
    <div className={styles.regiscontainer}>
        <Image src="/hexlogo.png" width={180} height={120} alt="logo"></Image>
        <form>
            <p>Password</p>
            <input type="password"></input>
            <p>Confirm Password</p>
            <input type="password"></input>
            <button>Next</button>
        </form>
    </div>
  )
}
