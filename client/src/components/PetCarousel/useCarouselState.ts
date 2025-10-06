import {useState} from 'react';
import type {NearbyAnimal, UserLocation} from '../../types/nearbyAnimal';
import {LocationService} from '../../services/locationService';
import {useAnimals} from '../../hooks/useAnimals';

type CarouselMode = 'loading' | 'error' | 'location_prompt' | 'nearby_pets' | 'all_pets';

export const useCarouselState = () => {
    const {data: animals = [], isLoading, error, refetch} = useAnimals();
    const [userLocation, setUserLocationState] = useState<UserLocation | null>(null);
    const [mode, setMode] = useState<CarouselMode>('all_pets');

    const nearbyAnimals: NearbyAnimal[] = animals as NearbyAnimal[];

    const setLocation = async (location: UserLocation) => {
        setUserLocationState(location);
        setMode('nearby_pets');
    };

    const showAllPets = async () => {
        setUserLocationState(null);
        setMode('all_pets');
        await refetch();
    };

    const resetToLocationPrompt = () => {
        LocationService.clearLocation();
        setUserLocationState(null);
        setMode('location_prompt');
    };

    const retryLastAction = async () => {
        await refetch();
    };

    const refreshAnimals = async () => {
        await refetch();
    };

    const sortAnimals = (sortBy: 'name' | 'age' | 'breed') => {
        return [...nearbyAnimals].sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'age':
                    return a.age.localeCompare(b.age);
                case 'breed':
                    return a.breed.localeCompare(b.breed);
                default:
                    return 0;
            }
        });
    };

    const state = {
        mode: isLoading ? 'loading' as const : error ? 'error' as const : mode,
        userLocation,
        animals: nearbyAnimals,
        error: error?.message || null
    };

    const hasError = !!error;
    const showLocationPrompt = mode === 'location_prompt';
    const showAnimals = mode === 'nearby_pets' || mode === 'all_pets';
    const hasAnimals = nearbyAnimals.length > 0;
    const isNearbyMode = mode === 'nearby_pets';

    return {
        state,
        setLocation,
        showAllPets,
        resetToLocationPrompt,
        retryLastAction,
        refreshAnimals,
        sortAnimals,
        isLoading,
        hasError,
        showLocationPrompt,
        showAnimals,
        hasAnimals,
        isNearbyMode
    };
};