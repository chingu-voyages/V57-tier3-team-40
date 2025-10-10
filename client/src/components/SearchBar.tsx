import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import LocationAutocomplete from "./LocationAutocomplete";
import { SearchIcon } from "./svg/SearchIcon";

const SearchBar: FC = () => {
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState({ city: "", state: "" });
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (breed.trim()) params.append("breed", breed.trim());
    if (location.city && location.state)
      params.append("location", `${location.city},${location.state}`);

    navigate(`/animals?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 bg-transparent py-8 flex-col md:flex-row">
      <input
        type="text"
        placeholder="Search by breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-[262px] md:w-full h-[44px] md:h-auto pl-4 md:py-2 border border-[1px] md:border-gray-700 rounded-[10px] md:rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700 placeholder-gray-400 bg-white md:bg-white text-[17px] md:text-base leading-[22px] md:leading-normal tracking-[-0.43px] md:tracking-normal"
        style={{
          fontFamily: 'SF Pro, sans-serif',
          fontWeight: 400,
          opacity: 1,
        }}
      />
      <LocationAutocomplete value={location} onChange={setLocation} />
      <button
        onClick={handleSearch}
        className="w-[262px] md:w-auto h-[51px] md:h-auto bg-[#08872B] md:bg-green-700 hover:bg-green-800 cursor-pointer transition-colors text-white rounded-[20px] md:rounded-full px-2 pr-3 py-2 md:p-2 shadow-[3px_3px_3px_rgba(0,0,0,0.3)] flex justify-center items-center"
        aria-label="Search"
      >
        <SearchIcon className="md:hidden"/>
        <HiOutlineMagnifyingGlass className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
