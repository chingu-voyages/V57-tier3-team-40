import { useState, useEffect } from "react";
import { stateToAbbreviation } from "../utils/stateToAbbreviation";
import type { Suggestion, Location } from "../types/location";

export const useLocationAutocomplete = (query: string) => {
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://us1.locationiq.com/v1/autocomplete?key=${
            import.meta.env.VITE_LOCATIONIQ_API_KEY
          }&q=${encodeURIComponent(query)}&countrycodes=us&limit=5&normalizeaddress=1&dedupe=1`
        );

        const data: Suggestion[] = await res.json();

        const formatted = data
          .map((item) => {
            const city = item.address.city || item.address.town || item.address.village;
            const state = item.address.state;
            if (!city || !state) return null;

            const abbr = stateToAbbreviation(state);
            return { city, state: abbr };
          })
          .filter(Boolean) as Location[];

        const unique = formatted.filter(
          (v, i, a) => a.findIndex((t) => t.city === v.city && t.state === v.state) === i
        );

        setSuggestions(unique);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  return { suggestions, loading };
};
