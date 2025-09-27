import type { FC } from "react"
import { NavLink } from "react-router-dom"
import { navInfo, headerLogo } from "../constants/header"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Header: FC = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center text-black px-12 py-6">
        <div>
          <NavLink to='/'>
            <img 
              src={headerLogo} 
              alt="Little Paws logo"
              className="w-[240px]"
            />
          </NavLink>
        </div>
        <div>
          <nav className="flex justify-center space-x-13">
            {navInfo.map((link, index)=> (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-lg font-medium hover:text-[#08872B]/60 transition-colors ${
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
      </div>
    </header>
  )
}

export default Header;
