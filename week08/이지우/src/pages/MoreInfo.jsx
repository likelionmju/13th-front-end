export default function MoreInfo() {
  return (
    <main className="flex justify-around items-start p-8 min-h-screen bg-blue-50 font-['ChosunGu']">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">좋아하는 가수</h1>
        <img src="/img/singer.png" alt="singer" className="w-60 mx-auto" />
        <h3 className="text-xl font-semibold">박효신</h3>
        <p>야생화, 눈의꽃, 숨 좋아합니다</p>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">가장 최근에 본 영화</h1>
        <img src="/img/venom.png" alt="venom" className="w-60 mx-auto" />
        <h3 className="text-xl font-semibold">베놈3</h3>
        <p>재미있었다</p>
      </div>
    </main>
  );
}
