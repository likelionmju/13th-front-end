import { useParams } from "react-router-dom";

export default function AboutDynamic() {
  const { name } = useParams();
  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{name}님의 자기소개</h2>
      <p className="text-lg">
        동적 URL로 전달된 이름으로 자기소개 페이지가 구성되었습니다.
      </p>
    </section>
  );
}
