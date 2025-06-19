const Header = () => {
  return (
    <header className="mt-6 ml-8">
      <nav>
        <ul className="flex gap-2 list-none font-[myfont] text-base">
          <li>
            <a
              href="https://likelion.net/"
              target="_blank"
              className="hover:text-blue-500 hover:underline"
            >
              likelion
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="https://software.mju.ac.kr/software/9779/subview.do"
              target="_blank"
              className="hover:text-blue-500 hover:underline"
            >
              major
            </a>
          </li>
          <span>|</span>
          <li>
            <a
              href="https://www.mju.ac.kr/mjukr/index.do"
              target="_blank"
              className="hover:text-blue-500 hover:underline"
            >
              mju
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
