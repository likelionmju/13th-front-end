import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 left-0 right-0 bg-[#ffedd7] h-20 flex justify-between items-center px-12 text-lg z-50">
      {/* ✅ 글씨 크기 키움 */}
      <div className="italic font-bold text-3xl font-['KBO-Dia-Gothic_bold']">
        <Link to="/">DAYUN's BLOG</Link>
      </div>
      {/* ✅ 오른쪽 정렬 + 간격 확보 */}
      <div className="flex gap-10 pr-4">
        <Link to="/work">WORK</Link>
        <Link to="/info">INFO</Link>
      </div>
    </header>
  );
}
