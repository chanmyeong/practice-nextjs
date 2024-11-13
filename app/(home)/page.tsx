"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}

// 디렉토리 구조 자체가 url ex) /company
// 만약 디레토리가 있어도 page.tsx가 없다면 유효한 페이지가 아님
// (home) -> 괄호로 둘러싸여진 디렉토리는 url에 영향을 주지 않는다.
