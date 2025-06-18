import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Hello, {username}!
      </h1>
      <p className="text-lg text-gray-700">
        이 페이지는{" "}
        <span className="font-semibold text-blue-500">동적 라우팅</span>으로
        생성된 사용자 상세 페이지입니다.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        url에서 이름을 바꿔보세요 👉 /user/yourname
      </p>
      <img
        src="/img/me.png"
        alt="user"
        className="w-40 mt-8 rounded-full shadow-lg border-4 border-white"
      />
    </div>
  );
}
