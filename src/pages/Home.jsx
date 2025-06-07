import { useState } from 'react'
import { useWeatherContext } from '../context/WeatherContext'
import WeatherCard from '../components/WeatherCard';

const Home = () => {

    const { setCity } = useWeatherContext();
    const [input, setInput] = useState('');
    const [showWeather, setShowWeather] = useState(false);

    const handleSearch = () => {
        if (input.trim() !== '') {
            setCity(input.trim());
            setInput('');
            setShowWeather(true);
        }
        else {
            alert('Please enter a city name...');
        }
    };

    return (
        <div className='flex flex-col items-center min-h-screen p-4 md:p-8'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center'>Weather App</h1>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 mb-6'>
                <input
                    type='text'
                    placeholder='Enter city name...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className='input input-info w-64'
                />
                <button onClick={handleSearch} className='btn btn-primary sm:w-auto w-full'>
                    Search
                </button>
            </div>

            {showWeather ? (<WeatherCard />) : (<p className='text-center text-lg text-info'>Search for a city to see weather information</p>)}
        </div>
    )
}

export default Home