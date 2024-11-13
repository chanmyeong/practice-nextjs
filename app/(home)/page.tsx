import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 5초 지연
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

// 디렉토리 구조 자체가 url ex) /company
// 만약 디레토리가 있어도 page.tsx가 없다면 유효한 페이지가 아님
// (home) -> 괄호로 둘러싸여진 디렉토리는 url에 영향을 주지 않는다.

// server component 사용시 fetch된 url 캐싱
