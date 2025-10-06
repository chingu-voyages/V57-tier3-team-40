import React from 'react';
import type {NearbyAnimal, UserLocation} from '../../types/nearbyAnimal';
import {PetCarouselCard} from './PetCarouselCard';
import {useEmblaCarouselHook} from './useEmblaCarousel';
import {EmblaPagination} from './EmblaPagination';

interface PetCarouselCardsProps {
    animals: NearbyAnimal[];
    userLocation: UserLocation | null;
    isNearbyMode: boolean;
    onChangeLocation: () => void;
}

export const PetCarouselCards: React.FC<PetCarouselCardsProps> = ({
                                                                      animals,
                                                                      isNearbyMode,
                                                                      onChangeLocation
                                                                  }) => {
    const {
        emblaRef,
        scrollPrev,
        scrollNext,
        selectedIndex,
        scrollSnaps,
        scrollTo
    } = useEmblaCarouselHook();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.carouselScrollPrev = scrollPrev;
            window.carouselScrollNext = scrollNext;
        }
    }, [scrollPrev, scrollNext]);

    if (animals.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16">
                <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No pets found
                </h3>
                <p className="text-gray-500 mb-4 text-center">
                    {isNearbyMode
                        ? 'Try expanding your search area or browse all available pets.'
                        : 'Check back later for new arrivals!'
                    }
                </p>
                {isNearbyMode && (
                    <button
                        onClick={onChangeLocation}
                        className="text-purple-600 hover:text-purple-700 font-medium underline"
                    >
                        Change Location
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="embla overflow-hidden" ref={emblaRef} style={{paddingTop: '25px', paddingBottom: '50px'}}>
                <div className="embla__container flex">
                    {animals.map((animal) => (
                        <PetCarouselCard
                            key={animal.id}
                            animal={animal}
                            showDistance={isNearbyMode}
                        />
                    ))}
                </div>
            </div>

            {animals.length > 1 && (
                <EmblaPagination
                    selectedIndex={selectedIndex}
                    scrollSnaps={scrollSnaps}
                    onDotClick={scrollTo}
                />
            )}
        </div>
    );
};