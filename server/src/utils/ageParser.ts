export const ADULT_AGE_THRESHOLD_MONTHS = 12;

export function parseAgeToMonths(ageString: string): number | null {
    if (!ageString || typeof ageString !== 'string') {
        return null;
    }

    const normalized = ageString.trim().toLowerCase();

    const monthsMatch = normalized.match(/^(\d+)\s*months?\s+old$/);
    const yearsMatch = normalized.match(/^(\d+)\s*years?\s+old$/);

    if (monthsMatch) {
        const months = parseInt(monthsMatch[1], 10);
        return isNaN(months) ? null : months;
    }

    if (yearsMatch) {
        const years = parseInt(yearsMatch[1], 10);
        return isNaN(years) ? null : years * 12;
    }

    return null;
}

export function isYoungAnimal(ageString: string): boolean {
    const ageInMonths = parseAgeToMonths(ageString);
    return ageInMonths !== null && ageInMonths < ADULT_AGE_THRESHOLD_MONTHS;
}

export function isAdultAnimal(ageString: string): boolean {
    const ageInMonths = parseAgeToMonths(ageString);
    return ageInMonths !== null && ageInMonths >= ADULT_AGE_THRESHOLD_MONTHS;
}