import React from 'react';
import {LocationPrompt} from './LocationPrompt';
import {PetCarouselCards} from './PetCarouselCards';
import {LoadingState} from './LoadingState';
import {ErrorState} from './ErrorState';
import {useCarouselState} from './useCarouselState';

declare global {
    interface Window {
        carouselScrollPrev?: () => void;
        carouselScrollNext?: () => void;
    }
}

export const PetCarousel: React.FC = () => {
    const {
        state,
        setLocation,
        showAllPets,
        resetToLocationPrompt,
        retryLastAction,
        isLoading,
        hasError,
        showLocationPrompt,
        showAnimals,
        isNearbyMode
    } = useCarouselState();

    const renderContent = () => {
        if (showLocationPrompt) {
            return (
                <LocationPrompt
                    onLocationSet={setLocation}
                    onBrowseAll={showAllPets}
                />
            );
        }

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

        if (showAnimals) {
            return (
                <PetCarouselCards
                    animals={state.animals}
                    userLocation={state.userLocation}
                    isNearbyMode={isNearbyMode}
                    onChangeLocation={resetToLocationPrompt}
                />
            );
        }

        return null;
    };

    const getTitle = () => {
        if (isNearbyMode && state.userLocation) {
            return 'Pets Available for Adoption Nearby';
        }
        return 'Pets Available for Adoption Nearby';
    };

    return (
        <section className="py-12 bg-[#FDF6EC]">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-1"></div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#104C35] text-center"
                            style={{marginRight: '126px'}}>
                            {getTitle()}
                        </h2>

                        <div className="flex-1 flex justify-start">
                            {showAnimals && state.animals.length > 1 && (
                                <div className="flex gap-2">
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
                                </div>
                            )}
                        </div>
                    </div>

                    {(showAnimals || hasError) && (
                        <div className="text-center mt-4">
                            <button
                                onClick={resetToLocationPrompt}
                                className="text-purple-600 hover:text-purple-700 text-sm underline transition-colors"
                            >
                                Change Location
                            </button>
                        </div>
                    )}
                </div>

                <div className="max-w-none mx-auto py-6">
                    {renderContent()}
                </div>

                {/*{showAnimals && hasAnimals && (*/}
                {/*    <div className="text-center mt-6 text-gray-600">*/}
                {/*        Showing {state.animals.length} pet{state.animals.length !== 1 ? 's' : ''}*/}
                {/*        {isNearbyMode && ' nearby'}*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </section>
    );
};