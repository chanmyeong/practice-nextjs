import styles from "../styles/book.module.css";

interface IBookProps {
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}

export default async function Book({
  title,
  author,
  book_image,
  amazon_product_url,
}: IBookProps) {
  return (
    <div className={styles.container}>
      <img src={book_image} className={styles.poster} alt={title} />
      <div style={{ padding: "20px" }}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.author}>{author}</h1>
        <a href={amazon_product_url} target={"_blank"} className={styles.link}>
          Buy Now &rarr;
        </a>
      </div>
    </div>
  );
}

// a 의 target의 blanck -> 새로운 탭
