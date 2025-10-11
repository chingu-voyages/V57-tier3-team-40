import { AnimalMapper } from "../mappers";
import { prisma } from "../config";
import { AnimalPublic, Gender, CreateAnimalDto, AnimalFilterParams, ANIMAL_FILTER_TYPES } from "../types";
import { parseAgeToMonths, ADULT_AGE_THRESHOLD_MONTHS } from "../utils/ageParser";
import { AnimalType } from "@prisma/client";

export const animalService = {
  async getAllAnimals(filters?: AnimalFilterParams): Promise<AnimalPublic[]> {
    const whereClause: any = {};

    if (filters?.type) {
      const types = Array.isArray(filters.type) ? filters.type : [filters.type];
      const typeConditions: any[] = [];

      types.forEach((filterType) => {
        if (filterType === ANIMAL_FILTER_TYPES.PUPPY) {
          typeConditions.push({ type: AnimalType.dog });
        } else if (filterType === ANIMAL_FILTER_TYPES.DOG) {
          typeConditions.push({ type: AnimalType.dog });
        } else if (filterType === ANIMAL_FILTER_TYPES.KITTEN) {
          typeConditions.push({ type: AnimalType.cat });
        } else if (filterType === ANIMAL_FILTER_TYPES.CAT) {
          typeConditions.push({ type: AnimalType.cat });
        } else if (filterType === ANIMAL_FILTER_TYPES.OTHER) {
          typeConditions.push({ type: AnimalType.other });
        }
      });

      if (typeConditions.length > 0) {
        whereClause.OR = typeConditions;
      }
    }

    if (filters?.breed) {
      const breeds = Array.isArray(filters.breed) ? filters.breed : [filters.breed];
      whereClause.breed = { in: breeds };
    }

    if (filters?.gender) {
      const genders = Array.isArray(filters.gender) ? filters.gender : [filters.gender];
      whereClause.gender = { in: genders };
    }

    if (filters?.goodWith) {
      const goodWithValues = Array.isArray(filters.goodWith) ? filters.goodWith : [filters.goodWith];
      whereClause.AND = goodWithValues.map(value => ({
        good_with: { contains: value, mode: 'insensitive' }
      }));
    }

    const animals = await prisma.animal.findMany({
      where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
      orderBy: { created_at: "desc" },
    });

    let filteredAnimals = animals.map((animal: any) => AnimalMapper.prismaToPublic(animal));

    if (filters?.type) {
      const types = Array.isArray(filters.type) ? filters.type : [filters.type];

      filteredAnimals = filteredAnimals.filter((animal) => {
        const ageInMonths = parseAgeToMonths(animal.age);
        if (ageInMonths === null) return false;

        return types.some((filterType) => {
          if (filterType === ANIMAL_FILTER_TYPES.PUPPY) {
            return animal.type === AnimalType.dog && ageInMonths < ADULT_AGE_THRESHOLD_MONTHS;
          } else if (filterType === ANIMAL_FILTER_TYPES.DOG) {
            return animal.type === AnimalType.dog && ageInMonths >= ADULT_AGE_THRESHOLD_MONTHS;
          } else if (filterType === ANIMAL_FILTER_TYPES.KITTEN) {
            return animal.type === AnimalType.cat && ageInMonths < ADULT_AGE_THRESHOLD_MONTHS;
          } else if (filterType === ANIMAL_FILTER_TYPES.CAT) {
            return animal.type === AnimalType.cat && ageInMonths >= ADULT_AGE_THRESHOLD_MONTHS;
          } else if (filterType === ANIMAL_FILTER_TYPES.OTHER) {
            return animal.type === AnimalType.other;
          }
          return false;
        });
      });
    }

    if (filters?.age) {
      const ageValues = Array.isArray(filters.age) ? filters.age : [filters.age];
      filteredAnimals = filteredAnimals.filter((animal) => {
        return ageValues.some(ageValue => {
          const normalizedAnimalAge = animal.age.trim().toLowerCase();
          const normalizedFilterAge = ageValue.trim().toLowerCase();
          return normalizedAnimalAge === normalizedFilterAge;
        });
      });
    }

    if (filters?.ageMin !== undefined || filters?.ageMax !== undefined) {
      filteredAnimals = filteredAnimals.filter((animal) => {
        const ageInMonths = parseAgeToMonths(animal.age);
        if (ageInMonths === null) return false;

        if (filters.ageMin !== undefined && ageInMonths < filters.ageMin) {
          return false;
        }
        if (filters.ageMax !== undefined && ageInMonths > filters.ageMax) {
          return false;
        }
        return true;
      });
    }

    return filteredAnimals;
  },

  async getAnimalById(id: string): Promise<AnimalPublic | null> {
    const animal = await prisma.animal.findUnique({
      where: { id },
    });
    return animal ? AnimalMapper.prismaToPublic(animal) : null;
  },

  async createAnimal(animalData: CreateAnimalDto): Promise<AnimalPublic> {
    const animal = await prisma.animal.create({
      data: {
        name: animalData.name,
        breed: animalData.breed,
        gender: animalData.gender,
        type: animalData.type,
        age: animalData.age,
        city: animalData.city,
        state: animalData.state,
        house_trained: animalData.houseTrained,
        health: animalData.health,
        good_with: animalData.goodWith,
        image: animalData.image,
        meet_puppy: animalData.meetPuppy,
      },
    });
    return AnimalMapper.prismaToPublic(animal);
  },

  async updateAnimal(
    id: string,
    animalData: Partial<CreateAnimalDto>
  ): Promise<AnimalPublic | null> {
    try {
      const animal = await prisma.animal.update({
        where: { id },
        data: {
          name: animalData.name,
          breed: animalData.breed,
          gender: animalData.gender,
          type: animalData.type,
          age: animalData.age,
          city: animalData.city,
          state: animalData.state,
          house_trained: animalData.houseTrained,
          health: animalData.health,
          good_with: animalData.goodWith,
          image: animalData.image,
          meet_puppy: animalData.meetPuppy,
        },
      });
      return AnimalMapper.prismaToPublic(animal);
    } catch (error) {
      return null;
    }
  },

  async deleteAnimal(id: string): Promise<boolean> {
    try {
      await prisma.animal.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  },
};
