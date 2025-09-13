// Sample data - this will come from your API later
const dogs = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    description: "Friendly and energetic, loves playing fetch!",
    image: "🐕",
  },
  {
    id: 2,
    name: "Luna",
    type: "Dog",
    breed: "Beagle",
    age: "2 years",
    description: "Calm and affectionate.",
    image: "🐕",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Puppy",
    breed: "Beagle",
    age: "1 month",
    description: "Gentle with kids, well-trained.",
    image: "🐕",
  },
];

const cats = [
  {
    id: 1,
    name: "Buddy",
    type: "Cat",
    breed: "Persian",
    age: "3 years",
    description: "Friendly and energetic, loves playing fetch!",
    image: "🐱",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    breed: "Persian",
    age: "2 years",
    description: "Calm and affectionate, perfect lap cat.",
    image: "🐱",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Kitten",
    breed: "Persian",
    age: "1 month",
    description: "Gentle with kids, well-trained.",
    image: "🐱",
  },
];

type AnimalProps = {
  type: "dogs" | "cats";
};

export default function AnimalsPage({ type }: AnimalProps) {
  const animals = type === "dogs" ? dogs : cats;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Animals Available for Adoption
        </h1>
        <p className="text-lg text-gray-600">
          Meet our wonderful animals looking for their forever homes
        </p>
      </div>

      {/* Filter Section - placeholder for now */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Filter</h3>
        <div className="flex flex-wrap gap-4">
          <select className="px-3 py-2 border rounded-md">
            <option>Breed</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </select>
          <select className="px-3 py-2 border rounded-md">
            <option>Age</option>
            <option>Young (0-2 years)</option>
            <option>Adult (3-7 years)</option>
            <option>Senior (8+ years)</option>
          </select>
          <select className="px-3 py-2 border rounded-md">
            <option>Size</option>
            <option>small </option>
            <option>medium</option>
            <option>big</option>
          </select>
          <select className="px-3 py-2 border rounded-md">
            <option>Gender</option>
            <option>Female</option>
            <option>Male</option>
          </select>
          <select className="px-3 py-2 border rounded-md">
            <option>Good with</option>
            <option>type 1</option>
            <option>type 2</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Animals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6 text-center">
              <div className="text-6xl mb-4">{animal.image}</div>
              <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
              <p className="text-gray-600 mb-1">{animal.breed}</p>
              <p className="text-gray-500 mb-3">{animal.age}</p>
              <p className="text-gray-700 mb-4">{animal.description}</p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message - will be used when filtering */}
      {animals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No animals found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
