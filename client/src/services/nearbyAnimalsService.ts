import type { Animal } from '../types/animal';
import type { NearbyAnimal, UserLocation, NearbyAnimalsResponse } from '../types/nearbyAnimal';
import type { Puppy } from '../constants/petData/puppies';
import { puppies } from '../constants/petData/puppies';
import { transformToNearbyAnimals } from './animalDistanceService';

export class NearbyAnimalsService {
  static async getNearbyAnimals(
    userLocation: UserLocation,
    maxDistance?: number,
    useMockData: boolean = true
  ): Promise<NearbyAnimalsResponse> {
    try {
      let animals: Animal[];

      if (useMockData) {
        animals = this.adaptPuppyDataToAnimals(puppies);
      } else {
        const response = await fetch('/api/animals');
        if (!response.ok) {
          throw new Error('Failed to fetch animals');
        }
        const data = await response.json();
        animals = data.data || data;
      }

      const nearbyAnimals = transformToNearbyAnimals(
        animals,
        userLocation.lat,
        userLocation.lng,
        'miles'
      );

      const filteredAnimals = maxDistance
        ? nearbyAnimals.filter(animal => animal.distance <= maxDistance)
        : nearbyAnimals;

      return {
        animals: filteredAnimals,
        userLocation,
        totalCount: filteredAnimals.length,
        maxDistance
      };
    } catch (error) {
      console.error('Error fetching nearby animals:', error);
      throw error;
    }
  }

  static async getAllAnimals(useMockData: boolean = true): Promise<Animal[]> {
    try {
      if (useMockData) {
        return this.adaptPuppyDataToAnimals(puppies);
      } else {
        const response = await fetch('/api/animals');
        if (!response.ok) {
          throw new Error('Failed to fetch animals');
        }
        const data = await response.json();
        return data.data || data;
      }
    } catch (error) {
      console.error('Error fetching all animals:', error);
      throw error;
    }
  }

  static adaptPuppyDataToAnimals(puppyData: Puppy[]): Animal[] {
    return puppyData.map((puppy, index) => ({
      id: (index + 1).toString(),
      name: puppy.name,
      breed: puppy.breed,
      gender: puppy.gender as 'Male' | 'Female',
      age: puppy.age,
      city: puppy.city,
      state: puppy.state,
      houseTrained: puppy.houseTrained,
      health: puppy.health,
      goodWith: puppy.goodWith,
      image: puppy.image,
      meetPuppy: puppy.meetPuppy,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  static async getNearbyAnimalsWithFallback(
    userLocation: UserLocation,
    maxDistance?: number
  ): Promise<NearbyAnimalsResponse> {
    try {
      return await this.getNearbyAnimals(userLocation, maxDistance, false);
    } catch (error) {
      console.warn('API failed, falling back to mock data:', error);
      return await this.getNearbyAnimals(userLocation, maxDistance, true);
    }
  }

  static filterAnimalsByType(animals: NearbyAnimal[], type: 'dog' | 'cat' | 'all' = 'all'): NearbyAnimal[] {
    if (type === 'all') return animals;

    return animals.filter(animal => {
      const breed = animal.breed.toLowerCase();
      if (type === 'dog') {
        return !breed.includes('cat');
      } else {
        return breed.includes('cat');
      }
    });
  }

  static getAnimalsByDistanceRange(animals: NearbyAnimal[]): {
    sameCity: NearbyAnimal[];
    nearby: NearbyAnimal[];
    regional: NearbyAnimal[];
    distant: NearbyAnimal[];
  } {
    return {
      sameCity: animals.filter(animal => animal.distance === 0),
      nearby: animals.filter(animal => animal.distance > 0 && animal.distance <= 25),
      regional: animals.filter(animal => animal.distance > 25 && animal.distance <= 100),
      distant: animals.filter(animal => animal.distance > 100)
    };
  }
}