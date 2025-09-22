import type { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="w-full h-[40vh] bg-gray-800 text-white flex flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="text-5xl text-center mb-8">The Animal Shelter App</h1>
        <nav className="flex justify-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/animals"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-white"
              }`
            }
          >
            Animals
          </NavLink>
          <NavLink
            to="/adopt-vs-foster"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-white"
              }`
            }
          >
            Adopt vs Foster
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
