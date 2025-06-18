import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-sky-custom p-8 flex flex-col items-center">
        <h1 className="font-aggro text-[60px]">ABOUT ME</h1>
        <h6 className="font-aggro text-2xl mt-4">명지대학교 멋쟁이사자처럼 소속</h6>
        <div className="flex gap-4 mt-4">

        </div>
      </header>

      {/* Nav */}
      <nav className="bg-blue-100 p-4 flex items-center gap-8 justify-center">
        <img src="/마흥이.png" alt="마흥이" className="w-24 h-24" />
        <Link className="text-blue-700" to="/">ABOUT</Link>
        <Link className="text-blue-700" to="/etc">ETC</Link>
        <Link className="text-blue-700" to="/profile/정윤호">PROFILE</Link>
      </nav>

      {/* Content */}
      <main className="flex-grow p-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 flex justify-between items-center">
        <ul className="flex gap-4">
          <img src="/카톡.jpeg" alt="" className="w-10 h-10" />
          <img src="/인스타그램.jpeg" alt="" className="w-10 h-10" />
          <img src="/페이스북.jpeg" alt="" className="w-10 h-10" />
          <a href="https://blog.naver.com/dbsgh9831"><img src="/블로그.jpeg" alt="" className="w-10 h-10" /></a>
          <a href="https://dbsgh9831.tistory.com/"><img src="/티스토리.jpeg" alt="" className="w-10 h-10" /></a>
        </ul>
        <pre className="text-sm">
tell:010‑7751‑9831{'\n'}email:dbsgh9831@naver.com
        </pre>
      </footer>
    </div>
  );
}