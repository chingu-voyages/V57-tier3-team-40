import type {Animal} from '../types/animal';
import type {DistanceCalculationParams, NearbyAnimal} from '../types/nearbyAnimal';
import {calculateDistance, getCityCoordinates} from '../utils/distanceCalculator';

export function transformToNearbyAnimals(
    animals: Animal[],
    userLat: number,
    userLng: number,
    unit: 'miles' | 'km' = 'miles'
): NearbyAnimal[] {
    return animals
        .map(animal => {
            const animalCoords = getCityCoordinates(animal.city, animal.state);

            if (!animalCoords) {
                return {
                    ...animal,
                    distance: 9999,
                    distanceUnit: unit,
                    distanceDisplay: 'Distance unknown'
                };
            }

            const distance = calculateDistance(
                userLat,
                userLng,
                animalCoords.lat,
                animalCoords.lng,
                unit
            );

            const distanceDisplay = formatDistanceDisplay(distance, unit);

            return {
                ...animal,
                distance,
                distanceUnit: unit,
                distanceDisplay
            };
        })
        .sort((a, b) => a.distance - b.distance);
}

export function calculateAnimalDistance(params: DistanceCalculationParams): {
    distance: number;
    distanceDisplay: string;
} {
    const {userLat, userLng, animalCity, animalState, unit = 'miles'} = params;

    const animalCoords = getCityCoordinates(animalCity, animalState);

    if (!animalCoords) {
        return {
            distance: 9999,
            distanceDisplay: 'Distance unknown'
        };
    }

    const distance = calculateDistance(
        userLat,
        userLng,
        animalCoords.lat,
        animalCoords.lng,
        unit
    );

    return {
        distance,
        distanceDisplay: formatDistanceDisplay(distance, unit)
    };
}

export function filterAnimalsByDistance(
    animals: NearbyAnimal[],
    maxDistance: number
): NearbyAnimal[] {
    return animals.filter(animal => animal.distance <= maxDistance);
}

export function groupAnimalsByDistanceRange(
    animals: NearbyAnimal[]
): Record<string, NearbyAnimal[]> {
    const groups: Record<string, NearbyAnimal[]> = {
        'same_city': [],
        'under_10': [],
        'under_25': [],
        'under_50': [],
        'over_50': []
    };

    animals.forEach(animal => {
        const distance = animal.distance;

        if (distance === 0) {
            groups.same_city.push(animal);
        } else if (distance <= 10) {
            groups.under_10.push(animal);
        } else if (distance <= 25) {
            groups.under_25.push(animal);
        } else if (distance <= 50) {
            groups.under_50.push(animal);
        } else {
            groups.over_50.push(animal);
        }
    });

    return groups;
}

export function getAnimalsWithinRadius(
    animals: Animal[],
    userLat: number,
    userLng: number,
    radiusInMiles: number,
    unit: 'miles' | 'km' = 'miles'
): NearbyAnimal[] {
    const nearbyAnimals = transformToNearbyAnimals(animals, userLat, userLng, unit);

    const maxDistance = unit === 'km' ? radiusInMiles * 1.60934 : radiusInMiles;

    return filterAnimalsByDistance(nearbyAnimals, maxDistance);
}

function formatDistanceDisplay(distance: number, unit: 'miles' | 'km'): string {
    if (distance === 0) {
        return 'In your city';
    } else if (distance < 1) {
        return `Less than 1 ${unit.slice(0, -1)} away`;
    } else if (distance === 9999) {
        return 'Distance unknown';
    } else {
        const unitLabel = distance === 1 ? unit.slice(0, -1) : unit;
        return `${distance} ${unitLabel} away`;
    }
}

export function sortNearbyAnimals(
    animals: NearbyAnimal[],
    sortBy: 'distance' | 'name' | 'age' | 'breed'
): NearbyAnimal[] {
    return [...animals].sort((a, b) => {
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
                return a.distance - b.distance;
        }
    });
}

export function calculateAverageDistance(animals: NearbyAnimal[]): number {
    if (animals.length === 0) return 0;

    const validDistances = animals
        .map(animal => animal.distance)
        .filter(distance => distance !== 9999);

    if (validDistances.length === 0) return 0;

    const sum = validDistances.reduce((acc, distance) => acc + distance, 0);
    return Math.round((sum / validDistances.length) * 10) / 10;
}