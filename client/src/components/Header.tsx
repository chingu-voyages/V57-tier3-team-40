import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { navInfo, headerLogo } from "../constants/header"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center text-black px-12 py-8 border border-dashed">
      <div>
        <img 
          src={headerLogo} 
          alt="Little Paws logo"
          className="w-[295px]"
        />
      </div>
      <div>
        <nav className="flex justify-center space-x-17">
          {navInfo.map(link => (
            <NavLink
              to={link.to}
              className={({ isActive }: { isActive: boolean }) =>
                `text-xl font-medium hover:text-[#08872B]/60 transition-colors ${
                  isActive ? "text-[#08872B]" : "text-[#2D3142]"
                }`
              }
            >
            <div className="flex items-center gap-2">
              {link.title}
              {(link.title === 'Dogs' || link.title === 'Cats') && <FaAngleDown />}
            </div>
            
          </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
