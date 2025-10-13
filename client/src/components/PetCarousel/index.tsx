import React, {useMemo, useState} from 'react';
import {PetCarouselCards} from './PetCarouselCards';
import {LoadingState} from './LoadingState';
import {ErrorState} from './ErrorState';
import {useCarouselState} from './useCarouselState';
import LocationAutocomplete from '../LocationAutocomplete';
import type {Location} from '../../types/location';

declare global {
    interface Window {
        carouselScrollPrev?: () => void;
        carouselScrollNext?: () => void;
    }
}

export const PetCarousel: React.FC = () => {
    const [userLocation, setUserLocation] = useState<Location>({city: "", state: ""});

    const {
        state,
        resetToLocationPrompt,
        retryLastAction,
        isLoading,
        hasError,
        isNearbyMode
    } = useCarouselState();

    const filteredAnimals = useMemo(() => {
        if (!userLocation.city || !userLocation.state) {
            return state.animals;
        }
        return state.animals.filter(
            animal =>
                animal.city?.toLowerCase() === userLocation.city.toLowerCase() &&
                animal.state?.toLowerCase() === userLocation.state.toLowerCase()
        );
    }, [state.animals, userLocation]);

    const renderContent = () => {
        if (isLoading) {
            return <LoadingState/>;
        }

        if (hasError) {
            return (
                <ErrorState
                    error={state.error}
                    onRetry={retryLastAction}
                    onChangeLocation={resetToLocationPrompt}
                />
            );
        }

        return (
            <PetCarouselCards
                animals={filteredAnimals}
                userLocation={state.userLocation}
                isNearbyMode={isNearbyMode}
                onChangeLocation={resetToLocationPrompt}
            />
        );
    };

    const getTitle = () => {
        return 'Pets Available for Adoption Nearby';
    };

    return (
        <section className="pb-12 mb-23 lg:mb-35 xl:mb-45">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <div className="flex items-center justify-between gap-30 mb-6">
                        <div className="hidden md:block flex-1"></div>

                        <h2 className="text-xl md:text-xl lg:text-4xl font-medium text-[#104C35] text-center flex-1 md:flex-none">
                            {getTitle()}
                        </h2>

                        <div className="hidden md:flex flex-1 justify-start gap-3">
                            {state.animals.length > 1 && (
                                <>
                                    <button
                                        onClick={() => {
                                            if (window.carouselScrollPrev) {
                                                window.carouselScrollPrev();
                                            }
                                        }}
                                        style={{
                                            width: '49px',
                                            height: '49px',
                                            backgroundColor: '#08872B',
                                            boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                                        }}
                                        className="rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-90 text-white"
                                        aria-label="Previous slide"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M15 19l-7-7 7-7"/>
                                        </svg>
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (window.carouselScrollNext) {
                                                window.carouselScrollNext();
                                            }
                                        }}
                                        style={{
                                            width: '49px',
                                            height: '49px',
                                            backgroundColor: '#08872B',
                                            boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                                        }}
                                        className="rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-90 text-white"
                                        aria-label="Next slide"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <LocationAutocomplete
                                value={userLocation}
                                onChange={setUserLocation}
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-none mx-auto py-3">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};