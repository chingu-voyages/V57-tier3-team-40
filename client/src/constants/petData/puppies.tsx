import beanie from '../../assets/petData/puppies/beanie.avif'
import bella from '../../assets/petData/puppies/bella.avif'
import bradie from '../../assets/petData/puppies/bradie.avif'
import charlie from '../../assets/petData/puppies/charlie.avif'
import coop from '../../assets/petData/puppies/coop.avif'
import cooper from '../../assets/petData/puppies/cooper.avif'
import dug from '../../assets/petData/puppies/dug.avif'
import luna from '../../assets/petData/puppies/luna.avif'
import maya from '../../assets/petData/puppies/maya.avif'
import olia from '../../assets/petData/puppies/olia.avif'
import rex from '../../assets/petData/puppies/rex.avif'
import rosco from '../../assets/petData/puppies/rosco.avif'


export type Puppy = {
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

export const puppies: Puppy[] = [
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
        image: bradie,
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
        houseTrained: 'No',
        health: "Vaccinations needed",
        goodWith: "Other dogs, pets, and children",
        image: coop,
        meetPuppy: `Coop is an energetic 5-month-old Husky who loves adventure and playtime. Smart and curious, 
        he’s already house-trained and up to date on all his vaccinations. Coop enjoys making friends with other dogs, pets, and children, 
        and he’s always ready to bring fun and joy to any home lucky enough to welcome him.`
    },
    {
        name: 'Maya',
        breed: "Pitbull",
        gender: "female",
        age: '10 months old',
        city: 'San Jose',
        state: 'CA',
        houseTrained: 'No',
        health: "Vaccinations up to date",
        goodWith: "Children",
        image: maya,
        meetPuppy: `Maya is an adorable 10-month-old Pitbull with a playful spirit and a heart full of love. This sweet girl is still working on house-training 
        but is up to date on all her vaccinations and ready to find her forever family. Maya is great with children and thrives in a fun, active environment 
        where she can explore, play, and cuddle up at the end of the day. With her charming personality and eager-to-please attitude, Maya is sure to bring joy 
        and energy to any home lucky enough to have her.`
    },
    {
        name: 'Rex',
        breed: "Labrador",
        gender: "Male",
        age: '11 months old',
        city: 'Chicago',
        state: 'IL',
        houseTrained: 'Yes',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, pets, and children",
        image: rex,
        meetPuppy: `An affectionate 11-month-old Labrador with a big heart and boundless energy. Rex is full of curiosity and always ready for 
        his next adventure, whether it’s a game of fetch, a long walk, or making new friends at the dog park. He’s up to date on all his vaccinations 
        and gets along wonderfully with other dogs, pets, and children. While he’s still working on his house-training, Rex is a quick learner who 
        just needs a little guidance and love. With his playful personality and loyal nature, Rex is sure to be a beloved companion in any home.`
    },
    {
        name: 'Dug',
        breed: "Golden Retriever",
        gender: "Male",
        age: '4 months old',
        city: 'Philadelphia',
        state: 'PA',
        houseTrained: 'No',
        health: "Vaccinations needed",
        goodWith: "Other dogs, pets, and children",
        image: dug,
        meetPuppy: `A lovable 4-month-old Golden Retriever with a heart of gold and a playful spirit. Dug is full of puppy energy and curiosity, 
        always eager to explore the world around him and make new friends. He gets along wonderfully with other dogs, pets, and children, making him 
        a perfect fit for a lively and loving home. While he's still working on house-training and needs his vaccinations, Dug is a bright and eager learner 
        who's just beginning his journey. With a little care and guidance, this sweet boy is sure to grow into a loyal, joyful companion.`
    },
    {
        name: 'Beanie',
        breed: "Corgi",
        gender: "Female",
        age: '3 months old',
        city: 'Austin',
        state: 'TX',
        houseTrained: 'No',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, pets, and children",
        image: beanie,
        meetPuppy: `Beanie is a spunky 3-month-old Corgi with a big personality packed into a little body. This adorable pup is full of energy, curiosity, and cuddles. 
        Beanie is up to date on all her vaccinations and loves making friends with other dogs, pets, and children. Though she’s still working on her house-training, 
        she’s a quick learner who just needs a bit of patience and love. With her short legs, wagging tail, and cheerful spirit, Beanie is sure to bring endless 
        smiles and playful moments to her future forever home.`
    },
    {
        name: 'Rosco',
        breed: "Yorkshire Terrier",
        gender: "Male",
        age: '5 months old',
        city: 'Los Angeles',
        state: 'CA',
        houseTrained: 'No',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, children",
        image: rosco,
        meetPuppy: `Rosco is an energetic 5-month-old Yorkshire Terrier with a big personality in a tiny package. Rosco is curious, playful, and always on the lookout 
        for his next adventure. He’s up to date on all his vaccinations and loves spending time with children and other dogs. While he’s still learning the 
        ropes when it comes to house-training, Rosco is a smart little guy who’s eager to learn and please. With his spunky attitude and affectionate nature, 
        Rosco is sure to steal hearts and bring joy to the lucky home that welcomes him.`
    },
    {
        name: 'Olia',
        breed: "Bernes Mountain",
        gender: "Female",
        age: '3 months old',
        city: 'Minneapolis',
        state: 'MN',
        houseTrained: 'No',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, pets, and children",
        image: olia,
        meetPuppy: `a gentle and fluffy 3-month-old Bernese Mountain Dog with a heart as big as her future paws! Olia is full of playful energy and curiosity, 
        always ready to explore, snuggle, or make new friends. She's up to date on all her vaccinations and gets along beautifully with other dogs, pets, and 
        children. While she’s still working on house-training, Olia is a smart, eager-to-learn pup who thrives with love and patience. With her calm nature and 
        affectionate personality, Olia is sure to grow into a loyal, loving companion for any lucky family.`
    },
    {
        name: 'Cooper',
        breed: "Fench Bulldog",
        gender: "Male",
        age: '2 months old',
        city: 'Phoenix',
        state: 'AZ',
        houseTrained: 'No',
        health: "Vaccinations needed",
        goodWith: "Other dogs, pets, and children",
        image: cooper,
        meetPuppy: `An adorable 2-month-old French Bulldog with a playful spark and a whole lot of charm. Cooper may be small, but he’s full of personality, 
        curiosity, and affection. He loves spending time with other dogs, pets, and children, making him a perfect addition to a loving, social home. While he’s 
        still in the early stages of house-training and needs his vaccinations, Cooper is a bright little pup who’s eager to learn and grow. With his sweet face, 
        silly antics, and lovable nature, Cooper is sure to bring joy and laughter to any family ready to welcome him home.`
    },
    {
        name: 'Bella',
        breed: "Terrier Mix",
        gender: "Female",
        age: '6 months old',
        city: 'Boston',
        state: 'MA',
        houseTrained: 'No',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, pets, and children",
        image: bella,
        meetPuppy: `Bella is a bright and bouncy 6-month-old Terrier Mix with a heart full of love and a tail that never stops wagging. She is playful, curious, 
        and always ready to make new friends—whether they walk on two legs or four! She’s up to date on her vaccinations and gets along wonderfully with other dogs, 
        pets, and children. Though she’s still working on her house-training, Bella is a smart and eager learner who just needs a little time and patience. 
        With her lively spirit and affectionate nature, Bella is sure to bring energy, joy, and endless cuddles to her future forever home.`
    },
    {
        name: 'Charlie',
        breed: "Australian Shepherd",
        gender: "Male",
        age: '4 months old',
        city: 'Portland',
        state: 'OR',
        houseTrained: 'No',
        health: "Vaccinations needed",
        goodWith: "Other dogs, pets, and children",
        image: charlie,
        meetPuppy: `A smart and spirited 4-month-old Australian Shepherd bursting with curiosity and energy. Charlie loves to explore, play, and learn new things, 
        and he gets along wonderfully with other dogs, pets, and children. Though he's still working on his house-training and needs his vaccinations, 
        Charlie is a quick learner who's eager to grow into a well-mannered, loyal companion. With his bright eyes, playful heart, and intelligent nature, 
        Charlie is ready to bring excitement, love, and a touch of adventure to the lucky family who welcomes him home.`
    },
    {
        name: 'Luna',
        breed: "Cardigan Mix",
        gender: "Female",
        age: '5 months old',
        city: 'Las Vegas',
        state: 'NV',
        houseTrained: 'Yes',
        health: "Vaccinations up to date",
        goodWith: "Other dogs, pets, and children",
        image: luna,
        meetPuppy: `Luna is a sweet and spunky 5-month-old Cardigan Mix who’s as loving as she is playful. Luna is already house-trained and up to date on her vaccinations, 
        making her more than ready to settle into her forever home. She gets along beautifully with other dogs, pets, and children, and she brings a gentle joy 
        wherever she goes. Whether she’s exploring the yard, playing with her pals, or snuggling up for a nap, Luna’s affectionate nature and cheerful personality 
        make her the perfect addition to any family looking for a loyal and lovable companion.`
    }
]