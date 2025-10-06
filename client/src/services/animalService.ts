import type {Animal} from '../types/animal';

export const animalService = {
    async getAllAnimals(): Promise<Animal[]> {
        const response = await fetch('/api/animals');
        if (!response.ok) {
            throw new Error('Failed to fetch animals');
        }
        const data = await response.json();
        return data.data || data;
    },

    async getAnimalById(id: string): Promise<Animal> {
        const response = await fetch(`/api/animals/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch animal');
        }
        const data = await response.json();
        return data.data || data;
    }
};
