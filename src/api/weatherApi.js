import conf from '../conf/conf'

const apiKey = conf.weatherApiKey;

export const fetchWeatherByCity = async (city) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!res.ok) {
        throw new Error('City not found');
    }
    return res.json();
};

export const fetchWeatherByCoords = async (lat, lon) => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    if (!res.ok) {
        throw new Error('Coordinates are invalid or not found');
    }
    return res.json();
};

export const fetchCityBySuggestions = async (inputValue) => {
    if (inputValue.trim().length < 2) {
        return [];
    }
    try {
        const res = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${apiKey}`
        );
        if (!res.ok) {
            console.error('Failed to fetch city suggestions from API');
            return [];
        }

        const data = await res.json();
        return data.map(({name, country, state, lat, lon}) => ({
            name: name,
            country: country,
            state: state,
            lat: lat,
            lon: lon
        }));
    }
    catch (err) {
        console.error(`Error in fetchCitySuggestions: ${err}`);
        return [];
    }
};