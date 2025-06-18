export default function AboutMe() {
  return (
    <main className="min-h-screen bg-blue-50 font-['ChosunGu']">
      <section className="text-center p-8 space-y-4">
        <h1 className="text-3xl font-bold">ABOUT ME 😉</h1>
        <img src="/img/me.png" alt="me" className="w-60 mx-auto" />
        <p>안녕하세요 제 이름은 이지우입니다.</p>
        <p>데이터사이언스전공 23학번이고</p>
        <p>생일은 2004.01.26 22살입니다.</p>
        <p>1년동안 잘 부탁드립니다!!</p>
      </section>

      <section className="text-center p-8 space-y-2">
        <h1 className="text-3xl font-bold">HOME 🏘️</h1>
        <p>제 고향은 안양이고</p>
        <p>현재는 동탄에 살고 있습니다.</p>
        <p>학기 중에는 기숙사에서 생활합니다.</p>
      </section>

      <section className="text-center p-8 space-y-2">
        <h1 className="text-3xl font-bold">LIKE 👍</h1>
        <p>취미는 축구 보기, 게임하기, 여행하기</p>
        <p>좋아하는 음식은 회, 고기</p>
        <p>즐겨 듣는 음악은 발라드, 케이팝입니다.</p>
      </section>
    </main>
  );
}
