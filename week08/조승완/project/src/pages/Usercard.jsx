import React from 'react';

const UserCard = () => {
  return (
    <div className="w-full md:w-80 p-4 m-4 border rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-bold">홍길동</h2>
      <p className="text-gray-600 leading-relaxed">프론트엔드 개발자</p>
      <button className="mt-4 px-4 md:px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        프로필 보기
      </button>
    </div>
  );
};

export default UserCard;