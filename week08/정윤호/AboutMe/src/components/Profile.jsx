import { useParams } from 'react-router-dom';

export default function Profile() {
  const { name } = useParams();
  return (
    <div className="text-center">
      <h2 className="font-aggro text-3xl mb-4">{name}님의 프로필 페이지입니다.</h2>
      <p>동적으로 생성된 라우팅 테스트!</p>
    </div>
  );
}
