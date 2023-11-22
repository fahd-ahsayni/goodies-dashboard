import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/GoodiesLogo.svg";
import { IoHome } from "react-icons/io5";
import routes from "../routes";

export default function Sidebar() {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white fixed left-0 top-0">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="grid h-10 w-10 place-content-center rounded-lg  text-xs ">
            <img src={logo} alt="" className="w-16 h-16" />
          </span>
        </div>
        <div className="border-t border-gray-100">
          <div className="px-2">
            <div className="py-4">
              <Link
                to="/home"
                className={`t group relative flex justify-center rounded px-2 py-1.5 ${
                  currentPage === "home"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <IoHome />
                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                  Home
                </span>
              </Link>
            </div>
            <ul className="space-y-1 border-t border-gray-100 pt-4">
              {routes.map((route) => (
                <li>
                  <Link
                    to={`/${route.name.toLowerCase()}`}
                    className={`group relative flex justify-center rounded px-2 py-1.5 ${
                      currentPage === route.name.toLowerCase()
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    {route.icon}
                    <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      {route.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form action="/logout">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
