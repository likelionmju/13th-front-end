export default function LifeTimeline() {
  const timeline = [
    '2005년 청주에서 태어났습니다 따라~',
    '2012년 산"성"초등학교 입학..',
    '2018년 용"성"중학교 입학..',
    '2021년 주"성"고등학교 입학..',
    '2024년 명지대 응소과 입학!',
    '응소 비대위, BB, 멋사 입단!',
    '샌애기 티 벗고 2학년..?!?',
    '과제 폭탄에 시달리다 사망...'
  ];
  return (
    <section id="life" className="text-center py-8">
      <h2 className="text-2xl font-bold text-white mb-4">일생..!</h2>
      <div className="text-transparent bg-gradient-to-b from-red-500 via-yellow-300 to-purple-700 bg-clip-text font-bold space-y-2">
        {timeline.map((item, i) => <h3 key={i}>{item}</h3>)}
      </div>
    </section>
  );
}