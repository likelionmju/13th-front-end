import { useState } from 'react';

export default function ProfileSection() {
  const imgs = [
    '/IMG/뽀샤시.jpeg',
    '/IMG/간부수련회_디코.jpeg',
    '/IMG/다인시치.jpeg'
  ];
  const [index, setIndex] = useState(0);

  return (
    <section id="profile" className="flex flex-wrap justify-center px-10 py-8 gap-8">
      <img
        src={imgs[index]}
        alt="profile"
        onClick={() => setIndex((index + 1) % imgs.length)}
        className="w-[300px] h-[450px] border-4 border-double border-blue-300 cursor-pointer"
      />
      <div className="text-white font-bold text-xl">
        <p>이름: <mark className="bg-yellow-300">김태훈</mark></p>
        <p>나이: 21살</p>
        <p>학번: 60241201</p>
        <p>학과: 응용소프트웨어학과</p>
        <p>MBTI: INFP</p>
        <p>본가: 충청북도 청주</p>
        <p>거주지: 학교 뒤 자취</p>
        <p>소속: 멋사 프론트, 비대위 홍보국장, BB</p>
        <p>입맛: 초딩 입맛</p>
        <p>키: 185 (희망)</p>
        <p>친구, 체력, 돈, 시간: 없음</p>
        <p>열정: 많습니다🔥🔥</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.instagram.com/sleepy_encoder" target="_blank"><img className="w-10 h-10" src="/IMG/instagram_logo.png" /></a>
          <a href="https://open.kakao.com/o/seBBP0Af" target="_blank"><img className="w-10 h-10" src="/IMG/Kakao_logo.png" /></a>
        </div>
      </div>
    </section>
  );
}