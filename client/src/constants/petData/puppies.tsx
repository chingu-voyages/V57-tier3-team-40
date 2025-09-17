

export type Puppies = {
    name: string
    breed: string
    gender: string
    age: string
    city: string
    state: string
    houseTrained: string
    health: string
    goodWith: string
    image: string
    meetPuppy: string
}

export const puppies: Puppies[] = [
    {
        name: 'Bradie',
        breed: "German Shepherd",
        gender: "Female",
        age: '7 months old',
        city: 'Walnut',
        state: 'CA',
        houseTrained: 'Yes',
        health: "Vaccinations up to date, spayed",
        goodWith: "Other dogs, children",
        image: '',
        meetPuppy: `Bradie is a sweet 7-month-old German Shepherd with a playful and loving personality. 
        She’s already house-trained and in excellent health, with all vaccinations up to date and spayed. 
        Bradie loves spending time with other dogs and children, making her the perfect addition to a family ready for a loyal and affectionate companion.`
    },
    {
        name: 'Coop',
        breed: "Huskie",
        gender: "Male",
        age: '5 months old',
        city: 'Seattle',
        state: 'WA',
        houseTrained: 'Yes',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, pets, and children",
        image: '',
        meetPuppy: `Coop is an energetic 5-month-old Husky who loves adventure and playtime. Smart and curious, 
        he’s already house-trained and up to date on all his vaccinations. Coop enjoys making friends with other dogs, pets, and children, 
        and he’s always ready to bring fun and joy to any home lucky enough to welcome him.`
    },
]