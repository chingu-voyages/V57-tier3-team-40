import type {Animal} from '../types/animal';
import type {NearbyAnimal, NearbyAnimalsResponse, UserLocation} from '../types/nearbyAnimal';

export class NearbyAnimalsService {
    static async getNearbyAnimals(
        userLocation: UserLocation,
        maxDistance?: number
    ): Promise<NearbyAnimalsResponse> {
        try {
            const response = await fetch('/api/animals');
            if (!response.ok) {
                throw new Error('Failed to fetch animals');
            }
            const data = await response.json();
            const animals: Animal[] = data.data || data;

            const nearbyAnimals: NearbyAnimal[] = animals as NearbyAnimal[];

            return {
                animals: nearbyAnimals,
                userLocation,
                totalCount: nearbyAnimals.length,
                maxDistance
            };
        } catch (error) {
            console.error('Error fetching nearby animals:', error);
            throw error;
        }
    }

    static async getAllAnimals(): Promise<Animal[]> {
        try {
            const response = await fetch('/api/animals');
            if (!response.ok) {
                throw new Error('Failed to fetch animals');
            }
            const data = await response.json();
            return data.data || data;
        } catch (error) {
            console.error('Error fetching all animals:', error);
            throw error;
        }
    }
}