export const Gender = {
  MALE: "Male",
  FEMALE: "Female",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export interface Animal {
  id: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
