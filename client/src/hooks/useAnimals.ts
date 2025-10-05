import {useQuery} from '@tanstack/react-query';
import {animalService} from '../services/animalService';
import type {Animal} from '../types/animal';

export const useAnimals = () => {
    return useQuery<Animal[], Error>({
        queryKey: ['animals'],
        queryFn: () => animalService.getAllAnimals(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 2
    });
};

export const useAnimal = (id: string) => {
    return useQuery<Animal, Error>({
        queryKey: ['animal', id],
        queryFn: () => animalService.getAnimalById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
        retry: 2
    });
};