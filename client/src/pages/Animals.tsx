import type { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";
import { animalApi } from "../services/animalApi";

const Animals: FC = () => {
  const {
    data: animals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["animals"],
    queryFn: animalApi.getAllAnimals,
  });

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="h-[70vh] w-full">
        <Header />
      </section>

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

          {animals && animals.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          )}

          {animals && animals.length === 0 && !isLoading && (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">
                No animals available at the moment.
              </p>
            </div>
          )}
        </div>
      </main>

      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Animals;
