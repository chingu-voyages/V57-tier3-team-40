import React from 'react';
import type {PetCarouselCardProps} from '../../types/nearbyAnimal';
import genderMaleIcon from '../../assets/icons/gender-male.svg';
import genderFemaleIcon from '../../assets/icons/gender-female.svg';

export const PetCarouselCard: React.FC<PetCarouselCardProps> = ({
                                                                    animal,
                                                                    onClick,
                                                                    isSelected = false,
                                                                    showDistance = true
                                                                }) => {
    const handleClick = () => {
        if (onClick) {
            onClick(animal);
        }
    };

    const renderGenderIcon = () => {
        if (animal.gender?.toLowerCase() === 'male') {
            return (
                <img
                    src={genderMaleIcon}
                    alt="Male"
                    className="w-5 h-5"
                />
            );
        }
        return (
            <img
                src={genderFemaleIcon}
                alt="Female"
                className="w-5 h-5"
            />
        );
    };

    return (
        <div
            className="embla__slide flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
            <div
                onClick={handleClick}
                style={{
                    width: '351px',
                    height: '499px',
                    borderRadius: '15px',
                    background: '#FFFFFF',
                    opacity: 1
                }}
                className={`
          shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300
          hover:shadow-xl hover:scale-105
          ${isSelected ? 'ring-2 ring-purple-500' : ''}
        `}
            >
                <div className="relative aspect-square overflow-hidden">
                    <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {showDistance && animal.distanceDisplay && (
                        <div
                            className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                            {animal.distanceDisplay}
                        </div>
                    )}
                </div>

                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                            {animal.name}
                        </h3>
                        {renderGenderIcon()}
                    </div>

                    <p className="text-gray-600 text-sm mb-1">
                        {animal.breed}
                    </p>

                    <div className="flex items-center text-gray-500 text-sm mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {animal.city}, {animal.state}
                    </div>
                </div>
            </div>
        </div>
    );
};