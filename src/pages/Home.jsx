import { useState } from 'react'
import { useWeatherContext } from '../context/WeatherContext'
import WeatherCard from '../components/WeatherCard';

const Home = () => {

    const { setCity } = useWeatherContext();
    const [input, setInput] = useState('');
    const [showWeather, setShowWeather] = useState(false);

    const handleSearch = () => {
        if (input.trim() != '') {
            setCity(input.trim());
            setInput('');
            setShowWeather(true);
        }
    };

    return (
        <div className='flex flex-col items-center min-h-screen p-4'>
            <h1 className='text-4xl font-bold mb-6'>Weather App</h1>

            <div className='flex gap-2 mb-6'>
                <input
                    type='text'
                    placeholder='Enter city name...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className='input w-64'
                />
                <button onClick={handleSearch} className='btn btn-primary'>
                    Search
                </button>
            </div>

            {showWeather ? (<WeatherCard />) : 'Search for a city...'}
        </div>
    )
}

export default Home