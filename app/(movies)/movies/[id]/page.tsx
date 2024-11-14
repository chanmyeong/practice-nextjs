import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// generateMetadata 라는 함수 자체가 nestJS자체에 지정?되어 있는 느낌
// 그래서 함수를 정의하기만 해도 동적으로 metadata가 변하는 것 같다.

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// []를 통해 동적 라우팅을 표시할 수 있다.
// movies/123

// Promise.all()는 자바스크립트에서 여러 비동기 작업을 동시에 실행하고, 모든 작업이 완료될 때까지 기다렸다가 결과를 배열 형태로 반환하는 함수입니다. 쉽게 말해, 여러 Promise를 모두 이행할 때까지 기다린 후, 그 결과를 한꺼번에 받아볼 수 있게 해줍니다.

// Suspense는 감싸진 컴포넌트를 await한다.
// Promise.all과 달리 하나의 요청이 완료되면 컴포넌트를 렌더링할 수 있다. 그러니까 컴포넌트에 async 붙이는 것 중요!
