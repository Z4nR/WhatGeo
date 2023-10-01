import { Link } from "react-router-dom";
import desktopLogo from "../assets/logo/desktop-logo.svg";

export default function Header() {
  return (
    <header className="w-full flex justify-center sticky z-20 shadow-sm">
      <div className="navbar px-6 py-2 max-w-7xl bg-base-100">
        <div className="flex-1">
          <Link to={"/"}>
            <img src={desktopLogo} alt="website-logo" />
          </Link>
        </div>
        <div className="hidden font-medium sm:flex-none sm:inline-block">
          <ul className="hidden sm:menu sm:menu-horizontal">
            <li>
              <Link to={"/guide"}>Petunjuk</Link>
            </li>
            <li>
              <Link to={"/doc"}>Dok</Link>
            </li>
            <li>
              <Link to={"/example"}>Contoh</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end font-medium sm:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 menu shadow bg-base-100 rounded-box w-52 px-1"
          >
            <li>
              <Link to={"/guide"}>Petunjuk</Link>
            </li>
            <li>
              <Link to={"/doc"}>Dok</Link>
            </li>
            <li>
              <Link to={"/example"}>Contoh</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
