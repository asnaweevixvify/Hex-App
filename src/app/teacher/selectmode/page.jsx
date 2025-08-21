"use client"

import styles from "./page.module.css"
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
            <Link href="/teacher/createclass">
                <div className={styles.plus_box}>
                    <FaPlus style={{color:"black",width:"100px",height:"100px"}} />
                </div>
            </Link>
            <h1>Create classroom</h1>
      </div>
      <div className={styles.box}>
            <div className={styles.plus_box}>
                <FaPlus style={{color:"black",width:"100px",height:"100px"}} />
            </div>
            <h1>Create exam</h1>
      </div>
      <div className={styles.box}>
            <div className={styles.plus_box}>
                <FaPlus style={{color:"black",width:"100px",height:"100px"}} />
            </div>
            <h1>Create slide</h1>
      </div>
    </div>
  )
}