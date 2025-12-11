import { create } from 'zustand'

export const useStore = create((set, get) => ({
    countryName: "",
    countryFlags: [],
    countries: {},
    currentCountry: null,
    error: "",
    fetchCountry: async () => {
        try {
            let countriesMap = get().countries;

            if (Object.keys(countriesMap).length === 0) {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca2");
                const data = await response.json();
                countriesMap = {};
                data.forEach(country => {
                    country.flagUrl = country.flags.png;
                    countriesMap[country.name.common] = country;
                });
                set({ countries: countriesMap });
            }

            const countriesArray = Object.values(countriesMap);
            const randomIndex = Math.floor(Math.random() * countriesArray.length);
            const randomCountry = countriesArray[randomIndex];

            set({ currentCountry: randomCountry });

        } catch (error) {
            set({ error: error.message });
        }
    },
}))
