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
            <a href='/' className='text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                Sun Syncs
            </a>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 mb-6'>
                <label className='input input-info w-72'>
                    <svg className='h-[1em] opacity-50' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <g
                            strokeLinejoin='round'
                            strokeLinecap='round'
                            strokeWidth='2.5'
                            fill='none'
                            stroke='currentColor'
                        >
                            <circle cx='11' cy='11' r='8'></circle>
                            <path d='m21 21-4.3-4.3'></path>
                        </g>
                    </svg>
                    <input 
                        type='search'
                        placeholder='Search for a city or area pincode'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </label>
                <button onClick={handleSearch} className='btn btn-primary sm:w-auto w-full'>
                    Search
                </button>
            </div>

            {showWeather ? (<WeatherCard />) : (<p className='text-center text-lg text-info mt-80'>Search for a city to see weather information</p>)}
        </div>
    )
}

export default Home