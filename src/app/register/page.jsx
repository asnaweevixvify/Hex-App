"use client"

import Image from "next/image"
import styles from "./page.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.regiscontainer}>
        <Image src="/hexlogo.png" width={180} height={120} alt="logo"></Image>
        <form>
            <p>Name</p>
            <input type="text"></input>
            <p>Last Name</p>
            <input type="text"></input>
            <p>Username</p>
            <input type="text"></input>
            <p>School</p>
            <select>
                <option hidden>choose your school</option>
            </select>
            <Link href="/password"><button>Next</button></Link>
        </form>
    </div>
  )
}
