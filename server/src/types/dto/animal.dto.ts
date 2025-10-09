import { Gender } from "../enums/gender.enum";
import { AnimalType } from "@prisma/client";

export interface CreateAnimalDto {
  name: string;
  breed: string;
  gender: Gender;
  type: AnimalType;
  age: string;
  city: string;
  state: string;
  houseTrained: string;
  health: string;
  goodWith: string;
  image?: string;
  meetPuppy?: string;
}

export interface UpdateAnimalDto {
  name?: string;
  breed?: string;
  gender?: Gender;
  type?: AnimalType;
  age?: string;
  city?: string;
  state?: string;
  houseTrained?: string;
  health?: string;
  goodWith?: string;
  image?: string;
  meetPuppy?: string;
}
