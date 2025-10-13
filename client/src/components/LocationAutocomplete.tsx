import { type FC, useState, useEffect, useRef } from "react";
import { useLocationAutocomplete } from "../hooks/useLocationAutocomplete";
import type { Location } from "../types/location";

interface LocationAutocompleteProps {
  value: Location;
  onChange: (val: Location) => void;
}

const LocationAutocomplete: FC<LocationAutocompleteProps> = ({ value, onChange }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { suggestions, loading } = useLocationAutocomplete(query);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowDropdown(suggestions.length > 0 && isEditing);
    setSelectedIndex(-1);
  }, [suggestions, isEditing]);

  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const selectedItem = listRef.current.children[selectedIndex] as HTMLElement;
      selectedItem?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [selectedIndex]);

  const handleSelect = (loc: Location) => {
    onChange(loc);
    setQuery(`${loc.city}, ${loc.state}`);
    setShowDropdown(false);
    setSelectedIndex(-1);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelect(suggestions[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsEditing(true);
  };

  const handleInputFocus = () => {
    setIsEditing(true);
  };

  const handleClear = () => {
    setQuery("");
    onChange({ city: "", state: "" });
    setIsEditing(false);
    setShowDropdown(false);
  };

  const showClearButton = !isEditing && value.city && value.state;

  return (
    <div ref={dropdownRef} className="relative w-[262px] md:w-full">
      <input
        type="text"
        placeholder="Search by city or state"
        value={query || (value.city && value.state ? `${value.city}, ${value.state}` : "")}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        className="w-[262px] md:w-full h-[44px] md:h-auto pl-4 md:py-2 bg-white border border-[#104C35]/60 rounded-[10px] md:rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5FED83] focus:border-[#5FED83] focus:bg-[#5FED83]/15 text-[#104C35] placeholder-gray-400 focus:placeholder-green-600 text-[17px] md:text-base leading-[22px] md:leading-normal tracking-[-0.43px] md:tracking-normal"
        style={{
          fontFamily: 'SF Pro, sans-serif',
          fontWeight: 400,
          opacity: 1,
        }}
      />

      {loading && (
        <div className="absolute right-3 top-3 text-gray-400 animate-pulse">...</div>
      )}

      {showClearButton && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear location"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {showDropdown && suggestions.length > 0 && (
        <ul
          ref={listRef}
          className="absolute z-50 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-48 overflow-auto shadow-lg"
        >
          {suggestions.map((s, index) => (
            <li
              key={`${s.city}-${s.state}`}
              onClick={() => handleSelect(s)}
              className={`px-4 py-2 cursor-pointer text-gray-700 transition-colors ${
                index === selectedIndex
                  ? "bg-green-200 font-medium"
                  : "hover:bg-green-100"
              }`}
            >
              {s.city}, {s.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;
