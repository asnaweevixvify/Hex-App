"use client"

import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar_container}>
        <ul>
            <li><button><h1>+</h1><h1>New</h1></button></li>
        </ul>
      </div>
      <div className={styles.main_container}></div>
    </div>
  )
}