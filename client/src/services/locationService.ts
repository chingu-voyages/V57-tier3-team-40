import type {CityOption, UserLocation} from '../types/nearbyAnimal';
import {US_CITY_COORDINATES} from '../data/usCityCoordinates';

export class LocationService {
    private static STORAGE_KEY = 'user_location';

    static getStoredLocation(): UserLocation | null {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    }

    static saveLocation(location: UserLocation): void {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(location));
        } catch (error) {
            console.warn('Failed to save location:', error);
        }
    }

    static clearLocation(): void {
        localStorage.removeItem(this.STORAGE_KEY);
    }

    static getAvailableCities(): CityOption[] {
        return Object.entries(US_CITY_COORDINATES).map(([cityState, coords]) => ({
            value: cityState,
            label: cityState,
            coordinates: coords
        })).sort((a, b) => a.label.localeCompare(b.label));
    }

    static parseLocationSelection(cityStateString: string): UserLocation | null {
        const coordinates = US_CITY_COORDINATES[cityStateString];
        if (!coordinates) return null;

        const [city, state] = cityStateString.split(', ');
        return {
            city: city.trim(),
            state: state.trim(),
            lat: coordinates.lat,
            lng: coordinates.lng
        };
    }

    static isLocationSet(): boolean {
        return this.getStoredLocation() !== null;
    }

    static getLocationDisplayName(location: UserLocation): string {
        return `${location.city}, ${location.state}`;
    }

    static searchCities(query: string): CityOption[] {
        const cities = this.getAvailableCities();
        const lowercaseQuery = query.toLowerCase();

        return cities.filter(city =>
            city.label.toLowerCase().includes(lowercaseQuery)
        );
    }

    static getNearestCities(lat: number, lng: number, count: number = 5): CityOption[] {
        const cities = this.getAvailableCities();

        return cities
            .map(city => ({
                ...city,
                distance: this.calculateDistance(lat, lng, city.coordinates.lat, city.coordinates.lng)
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, count)
            .map(({distance, ...city}) => city);
    }

    private static calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
        const R = 3959;
        const dLat = this.toRad(lat2 - lat1);
        const dLng = this.toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    private static toRad(deg: number): number {
        return deg * (Math.PI / 180);
    }
}