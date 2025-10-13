import type { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { animalApi } from "../services/animalApi";
import bgImage from "../assets/animalDetails/bg-image.png";

const AnimalDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const {
    data: animals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["animals"],
    queryFn: animalApi.getAllAnimals,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-lg text-gray-600">Loading animal details...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 text-lg">Error loading animal details</p>
        <button
          onClick={() => navigate("/animals")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Animals
        </button>
      </div>
    );
  }

  const animal = animals?.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 text-lg">Animal not found</p>
        <button
          onClick={() => navigate("/animals")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Animals
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative mb-8">
          {animal.image && (
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full h-auto object-cover rounded-lg"
              style={{ maxHeight: '600px' }}
            />
          )}
        </div>

        <div className="relative">
          <div className="absolute -top-32 right-0 w-[800px] h-[800px] opacity-none pointer-events-none z-0">
            <img
              src={bgImage}
              alt="Decorative background"
              className="w-full h-full ml-[500px] object-cover"
            />
          </div>

          <div className="relative z-10 space-y-16 pr-96">
          <div>
            <h1 
              className="text-4xl font-semibold mb-2 mt-20"
              style={{ fontFamily: 'Montserrat', color: '#232925' }}
            >
              {animal.name}
            </h1>
            <div className="space-y-1">
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat', color: '#747474' }}
              >
                Young {animal.breed}, {animal.gender}
              </p>
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat', color: '#747474' }}
              >
                {animal.age}
              </p>
              <p 
                className="text-lg"
                style={{ fontFamily: 'Montserrat', color: '#747474' }}
              >
                {animal.city}, {animal.state}
              </p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: 'Montserrat', color: '#232925' }}
            >
              About
            </h2>
            <div className="space-y-3">
              <div>
                <span 
                  className="font-semibold"
                  style={{ fontFamily: 'Montserrat', color: '#747474' }}
                >
                  HOUSE-TRAINED
                </span>{" "}
                <br />
                <span 
                  style={{ fontFamily: 'Montserrat', color: '#747474' }}
                >
                  {animal.houseTrained}
                </span>
              </div>
              <div>
                <span 
                  className="font-semibold"
                  style={{ fontFamily: 'Montserrat', color: '#747474' }}
                >
                  HEALTH
                </span>{" "}
                <br />
                <span 
                  style={{ fontFamily: 'Montserrat', color: '#747474' }}
                >
                  {animal.health}
                </span>
              </div>
              <div>
                <span 
                  className="font-semibold"
                  style={{ fontFamily: 'Montserrat', color: '#747474' }}
                >
                  GOOD IN A HOME WITH
                </span>{" "}
                <br />
                <span 
                  style={{ fontFamily: 'Montserrat', color: '#747474' }}
                >
                  {animal.goodWith}
                </span>
              </div>
            </div>
          </div>

          {/* Meet Section */}
          {animal.meetPuppy && (
            <div>
              <h2 
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: 'Montserrat', color: '#232925' }}
              >
                Meet {animal.name}
              </h2>
              <p 
                className="leading-relaxed w-[750px] mb-50"
                style={{ fontFamily: 'Montserrat', color: '#747474' }}
              >
                {animal.meetPuppy}
              </p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;