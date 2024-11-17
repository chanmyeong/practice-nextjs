import Link from "next/link";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getList() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const lists = await getList();
  return (
    <div>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <div className={styles.container}>
        {lists.results.map((list) => (
          <div className={styles.box} key={list.display_name}>
            <Link href={`/list/${list.list_name}`}>
              {list.list_name} &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
