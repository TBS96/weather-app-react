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
        throw new Error('City not found');
    }
    return res.json();
};