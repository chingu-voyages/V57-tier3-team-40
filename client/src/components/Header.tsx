import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full h-[70vh] bg-gray-800 text-white flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-5xl text-center">The Animal Shelter App</h1>
      </div>
    </header>
  );
};

export default Header;
