import { AnimalMapper } from "../mappers";
import { prisma } from "../config";
import { AnimalPublic, Gender, CreateAnimalDto } from "../types";

export const animalService = {
  async getAllAnimals(): Promise<AnimalPublic[]> {
    const animals = await prisma.animal.findMany({
      orderBy: { created_at: "desc" },
    });
    return animals.map((animal: any) => AnimalMapper.prismaToPublic(animal));
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
