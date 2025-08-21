"use client"

import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
            <Link href="/teacher/selectmode"><Image src="/teacher.png" width={400} height={400} alt="teacher"></Image></Link>
            <h1>Teacher</h1>
      </div>
      <div className={styles.box}>
            <Image src="/student.png" width={400} height={400} alt="teacher"></Image>
            <h1>Student</h1>
      </div>
    </div>
  )
}