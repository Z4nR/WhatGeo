import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const urlLocation = useLocation();
  const urlPath = urlLocation.pathname;

  return (
    <header className="w-full flex justify-center top-0 right-0 sticky z-20 shadow-sm bg-white">
      <div className="navbar px-6 py-2 max-w-7xl">
        <div className="flex-1">
          <Link
            className="text-primary hover:text-accent aria-[current=page]:text-secondary"
            aria-label="Home Button"
            aria-current={urlPath === '/' ? 'page' : undefined}
            to={'/'}
          >
            <h3 className="text-lg font-medium">WhatGeo: Indonesian Map</h3>
          </Link>
        </div>
        <div className="hidden font-medium items-center sm:flex">
          <nav>
            <ul className="hidden items-center gap-x-8 sm:flex">
              <li>
                <Link
                  className="text-primary hover:text-accent aria-[current=page]:text-secondary"
                  aria-label="Document Button"
                  aria-current={urlPath === '/doc' ? 'page' : undefined}
                  to={'/doc'}
                >
                  Dok
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary hover:text-accent aria-[current=page]:text-secondary"
                  aria-label="Guide Button"
                  aria-current={urlPath === '/guide' ? 'page' : undefined}
                  to={'/guide'}
                >
                  Petunjuk
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary hover:text-accent aria-[current=page]:text-secondary"
                  aria-label="Example Button"
                  aria-current={urlPath === '/example' ? 'page' : undefined}
                  to={'/example'}
                >
                  Contoh
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/Z4nR/GeoAPI-Doc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-accent aria-[current=page]:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="dropdown dropdown-end font-medium sm:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="hover:text-primary w-6 h-6"
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
            className="dropdown-content z-[1] p-2 menu bg-white shadow rounded-box px-1"
          >
            <li>
              <Link
                className="hover:bg-primary hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white"
                aria-label="Document Button"
                aria-current={urlPath === '/doc' ? 'page' : undefined}
                to={'/doc'}
              >
                Dokumentasi
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-primary hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white"
                aria-label="Guide Button"
                aria-current={urlPath === '/guide' ? 'page' : undefined}
                to={'/guide'}
              >
                Petunjuk
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-primary hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white"
                aria-label="Example Button"
                aria-current={urlPath === '/example' ? 'page' : undefined}
                to={'/example'}
              >
                Contoh
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Z4nR/GeoAPI-Doc"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <p>Github</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
