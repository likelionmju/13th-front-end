import React from 'react';

const UserCard = () => {
  return (
    <div className="/* 카드 전체 스타일 작성 (반응형 너비 포함) */">
      <h2 className="/* 사용자 이름 스타일 작성 (반응형 폰트 크기 포함) */">홍길동</h2>
      <p className="/* 직업명 텍스트 스타일 작성 */">프론트엔드 개발자</p>
      <button className="/* 버튼 스타일 작성 (반응형 여백 포함) */">
        프로필 보기
      </button>
    </div>
  );
};

export default UserCard;