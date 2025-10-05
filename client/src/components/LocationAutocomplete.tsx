import { type FC, useState } from "react";
import { useLocationAutocomplete } from "../hooks/useLocationAutocomplete";
import type { Location } from "../types/location";

interface LocationAutocompleteProps {
  value: Location;
  onChange: (val: Location) => void;
}

const LocationAutocomplete: FC<LocationAutocompleteProps> = ({ value, onChange }) => {
  const [query, setQuery] = useState("");
  const { suggestions, loading } = useLocationAutocomplete(query);

  const handleSelect = (loc: Location) => {
    onChange(loc);
    setQuery(`${loc.city}, ${loc.state}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search by city or state"
        value={query || (value.city && value.state ? `${value.city}, ${value.state}` : "")}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700 placeholder-gray-400 bg-white"
      />

      {loading && (
        <div className="absolute right-3 top-2 text-gray-400 animate-pulse">...</div>
      )}

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-48 overflow-auto shadow-lg">
          {suggestions.map((s) => (
            <li
              key={`${s.city}-${s.state}`}
              onClick={() => handleSelect(s)}
              className="px-4 py-2 hover:bg-green-100 cursor-pointer text-gray-700"
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
