export default function Home() {
  return (
    <article className="flex justify-between mt-16 p-12">
      <div className="w-1/2 text-center">
        <img src="/images/mainImg.jpg" alt="main" className="w-4/5 mx-auto" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div>
          <p className="text-3xl font-bold mb-5 font-['KBO-Dia-Gothic_bold']">
            ABOUT ME
          </p>
          <p className="text-lg leading-relaxed">
            안녕하세요. 저는 기획, 디자인, 개발을 모두 효율적으로 하기 위해
            코딩과 수학을 접목시켜 능숙한 인간 프로그래머가 되고 싶은
            이다윤입니다. <br />
            사람들의 불편함을 해결해 편리함을 제공하고 싶습니다. <br />
            무엇이든 시작하면 끝을 보는 성격으로 멋쟁이사자처럼과 함께 열정적인
            1년을 보내고 싶습니다. <br />
            아기사자로서 즐겁고 열정적으로 무에서 유를 창조해보고 싶습니다.
          </p>
        </div>
        <div className="mt-8">
          <p className="text-3xl font-bold mb-3 font-['KBO-Dia-Gothic_bold']">
            SKILL
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>JAVA</li>
            <li>C, C++</li>
            <li>HTML, CSS, JAVASCRIPT</li>
            <li>PYTHON</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
