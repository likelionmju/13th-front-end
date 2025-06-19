export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-100 flex justify-between items-center h-20 px-8 z-50">
      <img className="w-16 h-16" src="/IMG/likelion_main_img.png" alt="Logo" />
      <div className="flex space-x-6 font-bold text-lg">
        <button onClick={() => window.open('https://www.mju.ac.kr/sites/mjukr/intro/intro.html')}>MJU</button>
        <button onClick={() => window.open('https://techit.education/')}>LIKELION</button>
        <button>ABOUT</button>
        <button>LOGIN</button>
      </div>
    </nav>
  );
}