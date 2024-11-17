import styles from "../../styles/about.module.css";

export const metadata = {
  title: "About us",
};

export default function Company() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About us</h1>
      <p className={styles.p}>
        Welcome to the official explorer for The New York Times Best Seller list
        expolorer
      </p>
      <p className={styles.p}>We hope you enjoy your stay!</p>
    </div>
  );
}
