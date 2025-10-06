import type {Animal} from "./animal.ts";


export interface NearbyAnimal extends Animal {
    distance: number;
    distanceUnit: 'miles' | 'km';
    distanceDisplay?: string;
}


export interface UserLocation {
    city: string;
    state: string;
    lat: number;
    lng: number;
}

export type CarouselMode = 'location_prompt' | 'nearby_pets' | 'all_pets' | 'loading' | 'error';

export interface CarouselState {
    mode: CarouselMode;
    userLocation: UserLocation | null;
    animals: NearbyAnimal[];
    error: string | null;
}

export interface PetCarouselProps {
    title?: string;
    animals: NearbyAnimal[];
    onCardClick?: (animal: NearbyAnimal) => void;
    selectedId?: string;
    showDistance?: boolean;
    maxDistance?: number;
}

export interface PetCarouselCardProps {
    animal: NearbyAnimal;
    onClick?: (animal: NearbyAnimal) => void;
    isSelected?: boolean;
    showDistance?: boolean;
}


export interface LocationPromptProps {
    onLocationSet: (location: UserLocation) => void;
    onBrowseAll: () => void;
}

export interface EmblaOptionsType {
    align?: 'start' | 'center' | 'end';
    loop?: boolean;
    skipSnaps?: boolean;
    containScroll?: 'trimSnaps' | 'keepSnaps' | false;
    dragFree?: boolean;
    speed?: number;
}

export interface CarouselNavigationState {
    selectedIndex: number;
    scrollSnaps: number[];
    canScrollPrev: boolean;
    canScrollNext: boolean;
}


export interface CityOption {
    value: string;
    label: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

export interface DistanceCalculationParams {
    userLat: number;
    userLng: number;
    animalCity: string;
    animalState: string;
    unit?: 'miles' | 'km';
}

export interface NearbyAnimalsResponse {
    animals: NearbyAnimal[];
    userLocation: UserLocation;
    totalCount: number;
    maxDistance?: number;
}