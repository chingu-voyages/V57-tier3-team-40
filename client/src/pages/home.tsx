import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [selectedAnimalType, setSelectedAnimalType] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");
  const handleSearch = () => {
    // We need implement the search logic here
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-to-b from-blue-50 to-white rounded-lg mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Find you new Best Friend
          </h1>
        </section>
        {/* Search Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-lg mx-auto">
          <select
            value={selectedAnimalType}
            onChange={(e) => setSelectedAnimalType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select pet type</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="other">Other pets</option>
          </select>

          <input
            type="text"
            placeholder="Enter your location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <span>🔍</span>
            Search
          </button>
        </div>
        {/* Animal Categories */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🐕</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link to="/dogs">Puppies</Link>
            </h3>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🐕</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link to="/dogs">Dogs (Adults and Senior)</Link>
            </h3>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🐱</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link to="/cats">Kittens</Link>
            </h3>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🐱</div>
            <h3 className="text-xl font-semibold mb-2">
              <Link to="/cats">Cats</Link>
            </h3>
          </div>
        </section>

        {/* About */}
        <section className="bg-green-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Adopt a pet, don't shop!
          </h2>
          <p className="text-gray-600 mb-6">
            If you are an animal lover and looking to get a pet for your home,
            consider adopting one. There are many wonderful pets waiting for you
            to take them home.
          </p>
        </section>
      </div>
      <section className="bg-green-50 p-8 rounded-lg text-center">
        <h2
          className="text-2xl 
        font-bold text-gray-800 mb-4"
        >
          Pets Available for Adoption Nearby
        </h2>
        <p className="text-gray-600 mb-6">
          I need create roots to animals available for adoption nearby!!!!!!!!
        </p>
      </section>
    </>
  );
}
