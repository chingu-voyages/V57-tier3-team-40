import { Gender } from "../enums/gender.enum";
import { AnimalType } from "@prisma/client";

export interface AnimalPublic {
  id: string;
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
  createdAt: Date;
  updatedAt: Date;
}
