import { AnimalPublic, Gender } from "../types";

export const AnimalMapper = {
  prismaToPublic: (animal: any): AnimalPublic => ({
    id: animal.id,
    name: animal.name,
    breed: animal.breed,
    gender: animal.gender as Gender,
    age: animal.age,
    city: animal.city,
    state: animal.state,
    houseTrained: animal.house_trained,
    health: animal.health,
    goodWith: animal.good_with,
    image: animal.image,
    meetPuppy: animal.meet_puppy,
    createdAt: animal.created_at,
    updatedAt: animal.updated_at,
  }),
};
