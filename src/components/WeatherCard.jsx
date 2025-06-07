import { useWeatherContext } from '../context/WeatherContext'
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/weatherApi';
import { useEffect, useRef, useState } from 'react';

const WeatherCard = () => {

    const { city } = useWeatherContext();

    const [showLoading, setShowLoading] = useState(true);

    const loadingTimer = useRef(null);

    const [haveData, setHaveData] = useState(false);

    const { data, error, isLoading } = useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
        retry: false,
    });

    // console.log(data);

    useEffect(() => {
        setShowLoading(true);
        setHaveData(false);

        if (loadingTimer.current) {
            clearTimeout(loadingTimer.current);
        }

        loadingTimer.current = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => {
            if (loadingTimer.current) {
                clearTimeout(loadingTimer.current);
            }
        }
    }, [city]);

    useEffect(() => {
        if (data) setHaveData(true);
    }, [data]);

    if (error) {
        return (
            <div role='alert' className='alert alert-error mt-10 w-fit mx-auto'>
                <span>Error: {error.message}</span>
            </div>
        )
    }

    if (!data && !showLoading && !isLoading && haveData) {
        return (
            <div role='alert' className='alert alert-error mt-10 w-fit mx-auto'>
                <span>Could not load weather data</span>
            </div>
        )
    }

    return showLoading || isLoading ? (
        <div className='grid place-items-center w-full min-h-[50vh]'>
            <div className='loading loading-lg md:loading-xl loading-infinity'></div>
            <p className='text-center mt-4 text-lg'>Loading Weather Data...</p>
        </div>
    ) : (
        <div className='card w-full max-w-xs sm:max-w-md md:max-w-lg bg-base-100 shadow-xl mx-auto mt-4 sm:mt-6 md:mt-10 min-h-[50vh]'>
            <div className='card-body items-center text-center p-4 sm:p-6'>
                <h2 className='card-title text-xl sm:text-2xl'>{data.name}, {data.sys.country}</h2>
                <p className='text-4xl sm:text-5xl my-2'>{Math.round(data.main.temp)}° C</p>
                <p className='text-lg sm:text-xl mb-2'>Feels like: {Math.round(data.main.feels_like)}° C</p>
                <p className='capitalize text-base sm:text-lg mb-4'>{data.weather[0].description}</p>
                <div className='grid grid-cols-2 gap-4 w-full mt-4 text-sm sm:text-base'>
                    <div className='flex flex-col items-center'>
                        <span className='font-medium'>Humidity</span>
                        <span>{data.main.humidity}%</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-medium'>Wind</span>
                        <span>{data.wind.speed}m/s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard