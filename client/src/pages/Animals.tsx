import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { animalApi } from "../services/animalApi";
import AnimalCard from "../components/AnimalCard";

const Animals: FC = () => {
  const [searchParams] = useSearchParams();
  const breedParam = searchParams.get("breed");
  const locationParam = searchParams.get("location");
  const [city, state] = locationParam ? locationParam.split(",") : ["", ""];

  const {
    data: animals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["animals"],
    queryFn: animalApi.getAllAnimals,
  });

  const filteredAnimals =
    animals?.filter((a) => {
      const matchesBreed = breedParam
        ? a.breed.toLowerCase().includes(breedParam.toLowerCase())
        : true;

      const matchesLocation =
        city && state
          ? a.city.toLowerCase() === city.toLowerCase() &&
            a.state.toLowerCase() === state.toLowerCase()
          : true;

      return matchesBreed && matchesLocation;
    }) ?? [];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-1 w-full">
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Animals
          </h2>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-lg text-gray-600">
                Loading animals...
              </span>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-red-600 text-lg">
                Error loading animals:{" "}
                {error instanceof Error ? error.message : "Unknown error"}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!isLoading && filteredAnimals.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAnimals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          )}

          {!isLoading && filteredAnimals.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">
                No animals match your search.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Animals;
