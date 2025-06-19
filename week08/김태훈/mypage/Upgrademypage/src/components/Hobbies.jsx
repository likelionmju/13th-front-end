import { useState } from 'react';

export default function Hobbies() {
  const [index, setIndex] = useState(0);
  const pics = ['/IMG/1내찍사.jpeg', '/IMG/2내찍사.jpeg', '/IMG/3내찍사.jpeg'];
  return (
    <section id="hobbies" className="px-10 py-8">
      <h2 className="text-2xl font-bold text-white">취미</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="w-40 h-60 border-2 border-black p-1 hover:scale-110 duration-300">
          <p>사진찍기</p>
          <img src={pics[index]} className="w-full h-48 cursor-pointer" onClick={() => setIndex((index + 1) % pics.length)} />
        </div>
        <div className="w-40 h-60 border-2 border-black p-1 hover:scale-110 duration-300">
          <p>패션</p>
          <img src="/IMG/옷좋아해요.jpeg" className="w-full h-48" />
        </div>
        <div className="w-40 h-60 border-2 border-black p-1 hover:scale-110 duration-300">
          <p>애니</p>
          <img src="/IMG/24_1분기_장송프.jpeg" className="w-full h-48" />
        </div>
        <div className="w-40 h-60 border-2 border-black p-1 hover:scale-110 duration-300">
          <p>노래듣기</p>
          <img src="/IMG/JPOP.PNG" className="w-full h-48" />
        </div>
        <div className="w-40 h-60 border-2 border-black p-1 hover:scale-110 duration-300">
          <p>향수</p>
          <img src="/IMG/JoMalone.jpeg" className="w-full h-48" />
        </div>
      </div>
      <p className="mt-4 text-white">기타 연주, 칵테일, 운동, 요리 등등도 즐깁니다..!</p>
    </section>
  );
}