export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}

// []를 통해 동적 라우팅을 표시할 수 있다.
// movies/123
