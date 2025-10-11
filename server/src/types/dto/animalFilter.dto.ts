export const ANIMAL_FILTER_TYPES = {
  PUPPY: 'puppy',
  DOG: 'dog',
  KITTEN: 'kitten',
  CAT: 'cat',
  OTHER: 'other',
} as const;

export type AnimalFilterType = typeof ANIMAL_FILTER_TYPES[keyof typeof ANIMAL_FILTER_TYPES];

export interface AnimalFilterParams {
  type?: AnimalFilterType | AnimalFilterType[];
  breed?: string | string[];
  gender?: string | string[];
  age?: string | string[];
  ageMin?: number;
  ageMax?: number;
  goodWith?: string | string[];
}