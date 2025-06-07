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
            <div className='loading loading-xl loading-infinity'></div>
            <p className='text-center mt-4'>Loading Weather Data...</p>
        </div>
    ) : (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto mt-10 min-h-[50vh]'>
            <div className='card-body items-center text-center'>
                <h2 className='card-title text-2xl'>{data.name}, {data.sys.country}</h2>
                <p className='text-5xl'>{Math.round(data.main.temp)}° C</p>
                <p className='text-xl'>Feels like: {Math.round(data.main.feels_like)}° C</p>
                <p className='capitalize'>{data.weather[0].description}</p>
                <div className='flex justify-between w-full mt-4'>
                    <span>Humidity: {data.main.humidity}%</span>
                    <span>Wind: {data.wind.speed} m/s</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard