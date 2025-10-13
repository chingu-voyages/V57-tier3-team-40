import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { Animal } from "../types/animal";
import genderMaleIcon from '../assets/icons/gender-male.svg';
import genderFemaleIcon from '../assets/icons/gender-female.svg';

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
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{animal.name}</h3>
          <span>
            {animal.gender === 'Male' ? 
              <img src={genderMaleIcon} alt="male gender icon" className="w-[23px]" /> : 
              <img src={genderFemaleIcon} alt="female gender icon"/>
            }
          </span>
        </div>

        <div className="text-sm font-semibold text-gray-600">
          <p>
            Young {animal.breed}
          </p>
          <p>
            1 mile away
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
