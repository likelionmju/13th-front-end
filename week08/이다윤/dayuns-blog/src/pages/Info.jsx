export default function Info() {
  return (
    <footer className="min-h-screen flex flex-col justify-center items-center pt-28">
      <div className="text-4xl font-bold border-b-4 border-black mb-6 font-['KBO-Dia-Gothic_bold']">
        CONTACT ME
      </div>
      {/* ✅ 링크 간격 추가 */}
      <div className="flex gap-10 text-xl mb-6">
        <a
          href="https://blog.naver.com/ekdbsdlsmsckrgody"
          target="_blank"
          rel="noreferrer"
        >
          BLOG
        </a>
        <a
          href="https://www.instagram.com/_dayun_2/"
          target="_blank"
          rel="noreferrer"
        >
          INSTAGRAM
        </a>
      </div>
      <p className="text-center text-lg px-4">
        멋쟁이사자처럼과 함께 열정으로 불태우는 1년을 보내고 싶습니다.
        감사합니다!
      </p>
    </footer>
  );
}
