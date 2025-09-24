import type { Animal } from "../types/animal";

const API_BASE_URL = "http://localhost:4000/api";

export const animalApi = {
  async getAllAnimals(): Promise<Animal[]> {
    const response = await fetch(`${API_BASE_URL}/animals`);

    if (!response.ok) {
      throw new Error(`Failed to fetch animals: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  },
};
