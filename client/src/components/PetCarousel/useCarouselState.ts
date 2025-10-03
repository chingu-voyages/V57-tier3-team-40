import {useEffect, useState} from 'react';
import type {CarouselState, NearbyAnimal, UserLocation} from '../../types/nearbyAnimal';
import {LocationService} from '../../services/locationService';
import {NearbyAnimalsService} from '../../services/nearbyAnimalsService';

export const useCarouselState = () => {
    const [state, setState] = useState<CarouselState>({
        mode: 'loading',
        userLocation: null,
        animals: [],
        error: null
    });

    useEffect(() => {
        initializeCarousel();
    }, []);

    const initializeCarousel = async () => {
        try {
            const storedLocation = LocationService.getStoredLocation();

            if (storedLocation) {
                setState(prev => ({
                    ...prev,
                    mode: 'loading',
                    userLocation: storedLocation
                }));
                await loadNearbyAnimals(storedLocation);
            } else {
                setState(prev => ({
                    ...prev,
                    mode: 'location_prompt'
                }));
            }
        } catch (error) {
            setState(prev => ({
                ...prev,
                mode: 'error',
                error: error instanceof Error ? error.message : 'Failed to initialize carousel'
            }));
        }
    };

    const setLocation = async (location: UserLocation) => {
        setState(prev => ({
            ...prev,
            mode: 'loading',
            userLocation: location,
            error: null
        }));

        try {
            await loadNearbyAnimals(location);
        } catch (error) {
            setState(prev => ({
                ...prev,
                mode: 'error',
                error: error instanceof Error ? error.message : 'Failed to load nearby animals'
            }));
        }
    };

    const showAllPets = async () => {
        setState(prev => ({
            ...prev,
            mode: 'loading',
            userLocation: null,
            error: null
        }));

        try {
            const allAnimals = await NearbyAnimalsService.getAllAnimals(true);
            const nearbyAnimals: NearbyAnimal[] = allAnimals.map(animal => ({
                ...animal,
                distance: 0,
                distanceUnit: 'miles' as const,
                distanceDisplay: undefined
            }));

            setState(prev => ({
                ...prev,
                mode: 'all_pets',
                animals: nearbyAnimals
            }));
        } catch (error) {
            setState(prev => ({
                ...prev,
                mode: 'error',
                error: error instanceof Error ? error.message : 'Failed to load animals'
            }));
        }
    };

    const resetToLocationPrompt = () => {
        LocationService.clearLocation();
        setState(prev => ({
            ...prev,
            mode: 'location_prompt',
            userLocation: null,
            animals: [],
            error: null
        }));
    };

    const retryLastAction = async () => {
        const {userLocation} = state;

        if (userLocation) {
            await setLocation(userLocation);
        } else {
            await showAllPets();
        }
    };

    const refreshAnimals = async () => {
        const {userLocation, mode} = state;

        if (mode === 'nearby_pets' && userLocation) {
            await loadNearbyAnimals(userLocation);
        } else if (mode === 'all_pets') {
            await showAllPets();
        }
    };

    const filterAnimalsByDistance = (maxDistance: number) => {
        setState(prev => ({
            ...prev,
            animals: prev.animals.filter(animal =>
                animal.distance <= maxDistance || animal.distance === 0
            )
        }));
    };

    const sortAnimals = (sortBy: 'distance' | 'name' | 'age' | 'breed') => {
        setState(prev => ({
            ...prev,
            animals: [...prev.animals].sort((a, b) => {
                switch (sortBy) {
                    case 'distance':
                        return a.distance - b.distance;
                    case 'name':
                        return a.name.localeCompare(b.name);
                    case 'age':
                        return a.age.localeCompare(b.age);
                    case 'breed':
                        return a.breed.localeCompare(b.breed);
                    default:
                        return 0;
                }
            })
        }));
    };

    const loadNearbyAnimals = async (location: UserLocation) => {
        try {
            const response = await NearbyAnimalsService.getNearbyAnimalsWithFallback(
                location,
                50
            );

            setState(prev => ({
                ...prev,
                mode: 'nearby_pets',
                animals: response.animals,
                userLocation: location
            }));
        } catch (error) {
            throw error;
        }
    };

    const isLoading = state.mode === 'loading';
    const hasError = state.mode === 'error';
    const showLocationPrompt = state.mode === 'location_prompt';
    const showAnimals = state.mode === 'nearby_pets' || state.mode === 'all_pets';
    const hasAnimals = state.animals.length > 0;
    const isNearbyMode = state.mode === 'nearby_pets';

    return {
        state,
        setLocation,
        showAllPets,
        resetToLocationPrompt,
        retryLastAction,
        refreshAnimals,
        filterAnimalsByDistance,
        sortAnimals,
        isLoading,
        hasError,
        showLocationPrompt,
        showAnimals,
        hasAnimals,
        isNearbyMode
    };
};