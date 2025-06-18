import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-gray-800 sticky top-0 z-50 shadow-md">
        <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-4">
            <img src="/images.png" alt="로고" className="h-12 rounded" />
          </div>
          <ul className="flex flex-wrap justify-end gap-6 text-lg font-semibold flex-shrink-0 max-w-[70%]">
            <li className="whitespace-nowrap">
              <Link to="/about" className="hover:text-yellow-400">
                자기소개
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/contact" className="hover:text-yellow-400">
                연락처
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/dog" className="hover:text-yellow-400">
                ㅎㅎ
              </Link>
            </li>
            <li className="whitespace-nowrap">
              <a
                href="https://www.mju.ac.kr/sites/mjukr/intro/intro.html"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-400 break-all"
              >
                ㅋㅋ
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        화이팅 화이팅 화이팅 화이팅 화이팅 화이팅 화이팅 화이팅 화이팅
      </footer>
    </div>
  );
}
