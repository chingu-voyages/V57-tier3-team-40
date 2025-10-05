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
        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700 placeholder-gray-400 bg-white"
      />
      <LocationAutocomplete value={location} onChange={setLocation} />
      <button
        onClick={handleSearch}
        className="bg-green-700 hover:bg-green-800 cursor-pointer transition-colors text-white rounded-lg md:rounded-full px-2 pr-3 py-2 md:p-2 shadow-[3px_3px_3px_rgba(0,0,0,0.3)] flex justify-center items-center"
        aria-label="Search"
      >
        <SearchIcon className="md:hidden"/>
        <HiOutlineMagnifyingGlass className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
