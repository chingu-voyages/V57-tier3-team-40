import React from 'react';
import type {PetCarouselCardProps} from '../../types/nearbyAnimal';
import genderMaleIcon from '../../assets/icons/gender-male.svg';
import genderFemaleIcon from '../../assets/icons/gender-female.svg';
import { IoLocationSharp } from 'react-icons/io5';

export const PetCarouselCard: React.FC<PetCarouselCardProps> = ({
                                                                    animal,
                                                                    onClick,
                                                                    isSelected = false
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
                    style={{
                        width: '31px',
                        height: '30px',
                        opacity: 1
                    }}
                />
            );
        }
        return (
            <img
                src={genderFemaleIcon}
                alt="Female"
                style={{
                    width: '22px',
                    height: '31px',
                    opacity: 1
                }}
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
                <div
                    className="relative overflow-hidden"
                    style={{
                        width: '374.41px',
                        height: '373.89px',
                        marginTop: '-20.38px',
                        marginLeft: '-4.96px',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        opacity: 1
                    }}
                >
                    <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3
                            className="truncate"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '20px',
                                letterSpacing: '-0.32px',
                                color: '#232925',
                                opacity: 1
                            }}
                        >
                            {animal.name}
                        </h3>
                        {renderGenderIcon()}
                    </div>

                    <div
                        style={{
                            width: '352.81px',
                            height: '59.34px',
                            opacity: 1
                        }}
                    >
                        <p className="text-gray-600 text-sm mb-1">
                            {animal.breed}
                        </p>

                        <div className="flex items-center text-gray-500 text-sm">
                            <IoLocationSharp className="w-4 h-4 mr-1" />
                            {animal.city}, {animal.state}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};