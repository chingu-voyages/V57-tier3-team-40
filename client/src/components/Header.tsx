import type { FC } from "react";
import { NavLink } from "react-router-dom";
import logo  from "../assets/header/logo.png"

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center text-black px-12 py-9 border border-dashed">
      <div>
        <img 
          src={logo} 
          alt="Little Paws logo"
          className="w-[295px]"
        />
      </div>
      <div>
        <nav className="flex justify-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-green"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/animals"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-green"
              }`
            }
          >
            Dogs
          </NavLink>
          <NavLink
            to="/adopt-vs-foster"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-green"
              }`
            }
          >
            Cats
          </NavLink>
          <NavLink
            to="/adopt-vs-foster"
            className={({ isActive }: { isActive: boolean }) =>
              `text-lg hover:text-blue-300 transition-colors ${
                isActive ? "text-blue-400 font-semibold" : "text-green"
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
