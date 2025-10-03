import type { Animal } from "../types/animal";
import { puppies, type Puppy } from "../constants/petData/puppies";

// const API_BASE_URL = "http://localhost:4000/api";

// export const animalApi = {
//   async getAllAnimals(): Promise<Animal[]> {
//     const response = await fetch(`${API_BASE_URL}/animals`);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch animals: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//   },
// };


// Helper function to convert Puppy to Animal
const convertPuppyToAnimal = (puppy: Puppy, index: number): Animal => ({
  id: `puppy-${index + 1}`,
  name: puppy.name,
  breed: puppy.breed,
  gender: puppy.gender as "Male" | "Female",
  age: puppy.age,
  city: puppy.city,
  state: puppy.state,
  houseTrained: puppy.houseTrained,
  health: puppy.health,
  goodWith: puppy.goodWith,
  image: puppy.image,
  meetPuppy: puppy.meetPuppy,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export const animalApi = {
  async getAllAnimals(): Promise<Animal[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Convert local puppies data to Animal format
    return puppies.map(convertPuppyToAnimal);
  },
};
