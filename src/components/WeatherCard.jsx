import { useWeatherContext } from '../context/WeatherContext'
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../api/weatherApi';

const WeatherCard = () => {

    const { city } = useWeatherContext();

    const { data, error, isLoading } = useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
        retry: false,
    });

    // console.log(data);

    if (isLoading) return <div className='text-center mt-10'>Loading...</div>;
    if (error) {
        return (
            <div role='alert' className='alert alert-error mt-10 w-fit mx-auto'>
                <span>Error: {error.message}</span>
            </div>
        )
    }

    if(!data) {
        return (
            <div role='alert' className='alert alert-error mt-10 w-fit mx-auto'>
                <span>Could not load weather data</span>
            </div>
        )
    }

    return (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto mt-10'>
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