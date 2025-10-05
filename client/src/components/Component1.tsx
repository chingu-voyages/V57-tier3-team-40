import type { FC } from "react";
import SearchBar from "./SearchBar";

const Component1: FC = () => (
  <div className="w-full max-w-7xl h-[45vh] px-4 py-6 bg-gray-200 rounded-3xl shadow-lg">
    <h2 className="text-lg font-semibold">Component 1</h2>
    <p>This is the first component of the homepage.</p>

    <SearchBar />
  </div>
);

export default Component1;
