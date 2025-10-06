import React, { useState } from 'react';
import type { LocationPromptProps } from '../../types/nearbyAnimal';
import { LocationService } from '../../services/locationService';

export const LocationPrompt: React.FC<LocationPromptProps> = ({
  onLocationSet,
  onBrowseAll
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const availableCities = searchQuery.length > 0
    ? LocationService.searchCities(searchQuery)
    : LocationService.getAvailableCities();

  const handleCitySelect = (cityStateString: string) => {
    const location = LocationService.parseLocationSelection(cityStateString);
    if (location) {
      LocationService.saveLocation(location);
      onLocationSet(location);
    }
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setSelectedCity(query);
    setIsDropdownOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg">
      <div className="mb-6">
        <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
        📍 Set Your Location
      </h3>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        to see pets available near you
      </p>

      <div className="relative mb-6">
        <input
          type="text"
          value={selectedCity}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => setIsDropdownOpen(true)}
          placeholder="Search or choose your city"
          className="w-80 max-w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
        />

        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {availableCities.length > 0 ? (
              availableCities.slice(0, 10).map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => handleCitySelect(value)}
                  className="w-full px-4 py-2 text-left hover:bg-purple-50 hover:text-purple-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {label}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 text-center">
                No cities found
              </div>
            )}
          </div>
        )}
      </div>

      <div className="text-center">
        <span className="text-gray-500 mr-2">Or browse</span>
        <button
          onClick={onBrowseAll}
          className="text-purple-600 hover:text-purple-700 font-medium underline transition-colors"
        >
          All Available Pets →
        </button>
      </div>
    </div>
  );
};