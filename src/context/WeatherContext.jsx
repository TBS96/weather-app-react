import { createContext, useContext, useState } from 'react'

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [city, setCity] = useState('');
    const [coords, setCoords] = useState(null);

    return (
        <WeatherContext.Provider value={{city, setCity, coords, setCoords}}>
            {children}
        </WeatherContext.Provider>
    )
};

export const useWeatherContext = () => useContext(WeatherContext);