import { Gender } from "../enums/gender.enum";

export interface CreateAnimalDto {
  name: string;
  breed: string;
  gender: Gender;
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
  age?: string;
  city?: string;
  state?: string;
  houseTrained?: string;
  health?: string;
  goodWith?: string;
  image?: string;
  meetPuppy?: string;
}
