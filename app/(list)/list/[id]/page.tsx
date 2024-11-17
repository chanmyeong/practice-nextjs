import Book from "../../../../components/book";
import { API_URL } from "../../../constants";
import styles from "../../../../styles/book-list.module.css";

type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  return {
    title: id,
  };
}

async function getBooks(name: string) {
  const response = await fetch(`${API_URL}/list?name=${name}`);
  return response.json();
}

export default async function BookListPage(props: { params: IParams }) {
  const params = await props.params;
  const name = params.id;
  const books = await getBooks(name);
  return (
    <div className={styles.container}>
      {books.results.books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          book_image={book.book_image}
          amazon_product_url={book.amazon_product_url}
        />
      ))}
    </div>
  );
}
