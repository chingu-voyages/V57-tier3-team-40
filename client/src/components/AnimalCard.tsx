import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { Animal } from "../types/animal";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: FC<AnimalCardProps> = ({ animal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/animals/${animal.id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:drop-shadow-2xl transition-all duration-200 cursor-pointer transform hover:scale-100"
      onClick={handleClick}
    >
      {animal.image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{animal.name}</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {animal.gender}
          </span>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <strong>Breed:</strong> {animal.breed}
          </p>
          <p>
            <strong>Age:</strong> {animal.age}
          </p>
          <p>
            <strong>Location:</strong> {animal.city}, {animal.state}
          </p>
          <p>
            <strong>House Trained:</strong> {animal.houseTrained}
          </p>
          <p>
            <strong>Health:</strong> {animal.health}
          </p>
          <p>
            <strong>Good With:</strong> {animal.goodWith}
          </p>
          {animal.meetPuppy && (
            <p>
              <strong>Meet & Greet:</strong> {animal.meetPuppy}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
