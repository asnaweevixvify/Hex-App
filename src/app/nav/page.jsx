"use client"
import styles from "./page.module.css";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.navcontainer}>
        <ul>
            <div className={styles.logo}>
                <Link href="/"><li><Image src="/hexlogo.png" width="150" height="100" alt="logo"></Image></li></Link>
            </div>
            <div className={styles.list}>
                <li>Lesson <RiArrowDropDownLine size={30}/></li>
                <li>Exam <RiArrowDropDownLine size={30}/></li>
                <Link href="/login"><li>Login</li></Link>
                <li>Sign in</li>
            </div>
        </ul>
    </div>
  )
}
