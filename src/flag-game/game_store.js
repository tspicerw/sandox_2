import { create } from 'zustand'

export const useStore = create((set, get) => ({
    countryName: "",
    countries: {},
    currentCountry: null,
    error: "",
    incorrectAnswer: "",
    correctAnswer: "",
    attempts: new Array(6).fill({ value: "", status: "pending" }),
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

            // Reset attempts on new country
            set({
                currentCountry: randomCountry,
                attempts: new Array(6).fill({ value: "", status: "pending" }),
                correctAnswer: "",
                incorrectAnswer: "",
                error: ""
            });

        } catch (error) {
            set({ error: error.message });
        }
    },
    fetchInput: (index, value) => {
        set((state) => {
            const newAttempts = [...state.attempts];
            newAttempts[index] = { ...newAttempts[index], value: value };
            return { attempts: newAttempts };
        });
    },
    checkAnswer: (index) => {
        const { currentCountry, attempts, countries } = get();
        const attempt = attempts[index];
        const attemptValueLower = attempt.value.toLowerCase();

        // Check if value is a valid country name
        const isValidCountry = Object.keys(countries).some(name => name.toLowerCase() === attemptValueLower);

        if (!isValidCountry) {
            set({ error: `${attempt.value} is not a valid country name. Please try again.` });
            return;
        }

        const isCorrect = attemptValueLower === currentCountry.name.common.toLowerCase();

        set((state) => {
            const newAttempts = [...state.attempts];
            newAttempts[index] = { ...newAttempts[index], status: isCorrect ? "correct" : "incorrect" };
            return {
                attempts: newAttempts,
                correctAnswer: isCorrect ? attempt.value : "",
                incorrectAnswer: !isCorrect ? attempt.value : "",
                error: ""
            };
        });
    }
}))
