import { useWeatherContext } from '../context/WeatherContext'
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/weatherApi';
import { useEffect, useRef, useState } from 'react';
import WeatherIcons from './WeatherIcons';

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

    console.log(data);

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
                <WeatherIcons iconCode={data.weather[0].icon} size='text-6xl' />
                <p className='capitalize text-base sm:text-lg'>{data.weather[0].description}</p>
                <h2 className='card-title text-xl sm:text-2xl'>{data.name}, {data.sys.country}</h2>
                <p className='text-4xl sm:text-5xl my-2'>{Math.round(data.main.temp)}° C</p>

                <div className='flex items-center gap-2 text-lg sm:text-xl mb-2 tooltip tooltip-bottom' data-tip='Feels Like'>
                    <WeatherIcons iconCode={`thermometer`} />
                    <span>Feels like: {Math.round(data.main.feels_like)}° C</span>
                </div>

                <div className='flex items-center justify-between w-full mt-4'>
                    <div className='flex items-center gap-2 tooltip' data-tip='Humidity'>
                        <WeatherIcons iconCode={`humidity`} />
                        <span>{data.main.humidity}%</span>
                    </div>

                    <div className='flex items-center gap-2 tooltip' data-tip='Wind Speed'>
                        <WeatherIcons iconCode={`wind`} />
                        <span>{data.wind.speed} m/s</span>
                    </div>
                </div>

                <div className='flex items-center justify-between w-full mt-4'>
                    <div className='flex items-center gap-2 tooltip tooltip-bottom' data-tip='Sunrise'>
                        <WeatherIcons iconCode={`sunrise`} />
                        <span>
                            {
                                new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
                            }
                        </span>
                    </div>

                    <div className='flex items-center gap-2 tooltip tooltip-bottom' data-tip='Sunset'>
                        <WeatherIcons iconCode={`sunset`} />
                        <span>
                            {
                                new Date(data.sys.sunset * 1000).toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
                            }
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherCard