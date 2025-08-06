import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homecontainer}>
      <div className={styles.col1}>
        <div className={styles.box1} data-aos="fade-up">
          <h2>
            HEX , a tool that makes math easier
          </h2>
          <h1>
            Fun-Filled Math with Visuals & Challenges!
          </h1>
          <h3>
            Hex is more than just a platform for teaching math; it is a platform that teaches math more visually, connects teachers and students, and provides new ways to explore and learn math, as well as develop math problem-solving skills for students.
          </h3>
        </div>
        <div className={styles.box2} data-aos="fade-up"></div>
      </div>
      <button data-aos="fade-up">Start</button>
    </div>
  );
}
