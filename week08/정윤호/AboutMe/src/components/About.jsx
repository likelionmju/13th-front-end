export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div>
        <h2 className="font-aggro text-3xl mb-4">ABOUT ME</h2>
        <img src="/자기소개.jpg" alt="자기소개" className="w-[400px] rounded-lg shadow" />
      </div>
      <div className="text-lg space-y-2">
        <p>이름: <strong>정윤호</strong></p>
        <p>생년월일: 2002.03.18</p>
        <p>본적: 경기도 용인</p>
        <p>MBTI: ISTP</p>
        <p>성격: 밝고 정이 많습니다.</p>
        <pre className="whitespace-pre-wrap">
간단한 소개: 명지대학교 수학과에서 2년을 다니며 미래에 대한
고민을 하다가 이번 학기에 응용 소프트웨어로 전과하게 되었습니다.
많이 부족하지만 열심히 해보겠습니다.
        </pre>
        <div>
          <label>궁금한 점:</label>
          <textarea className="w-full h-24 border p-2 mt-1" defaultValue="궁금한 점이 있다면 작성해주세요"/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">제출</button>
        </div>
      </div>
    </div>
  );
}
