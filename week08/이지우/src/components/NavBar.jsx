import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-cyan-100">
      <img src="/img/maheung.png" alt="logo" className="w-20" />
      <ul className="flex gap-8 text-lg font-semibold">
        <li>
          <Link className="hover:text-blue-500" to="/">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-500" to="/more">
            MORE
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-500" to="/user/jiwoo">
            USER
          </Link>
        </li>
        <li>
          <a
            className="hover:text-blue-500"
            href="https://www.instagram.com/ji._.0_o/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
        </li>
      </ul>
    </nav>
  );
}
