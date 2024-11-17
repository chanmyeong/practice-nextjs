export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

// 각 페이지 고유의 layout 또한 만들 수 있다. 상위 폴더의 layout이 중첩됨
