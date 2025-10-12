import type {Animal} from '../types/animal';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const animalService = {
    async getAllAnimals(): Promise<Animal[]> {
        const response = await fetch(`${API_BASE_URL}/api/animals`);
        if (!response.ok) {
            throw new Error('Failed to fetch animals');
        }
        const data = await response.json();
        return data.data || data;
    },

    async getAnimalById(id: string): Promise<Animal> {
        const response = await fetch(`${API_BASE_URL}/api/animals/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch animal');
        }
        const data = await response.json();
        return data.data || data;
    }
};
