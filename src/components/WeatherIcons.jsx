import { WiCloudy, WiDayCloudy, WiDayRain, WiDaySunny, WiFog, WiNightClear, WiNightCloudy, WiNightRain, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

const WeatherIcons = ({ iconCode, size = 'text-4xl', animation = 'animate-pulse' }) => {

    const iconMap = {
        '01d': <WiDaySunny className={`${size} ${animation} text-yellow-500`} />,
        '01n': <WiNightClear className={`${size} ${animation} text-indigo-300`} />,
        '02d': <WiDayCloudy className={`${size} ${animation} text-gray-500`} />,
        '02n': <WiNightCloudy className={`${size} ${animation} text-gray-400`} />,
        '03d': <WiCloudy className={`${size} ${animation} text-blue-900`} />,
        '03n': <WiCloudy className={`${size} ${animation} text-blue-900`} />,
        '04d': <WiCloudy className={`${size} ${animation} text-blue-900`} />,
        '04n': <WiCloudy className={`${size} ${animation} text-blue-900`} />,
        '09d': <WiRain className={`${size} ${animation} text-blue-400`} />,
        '09n': <WiRain className={`${size} ${animation} text-blue-400`} />,
        '10d': <WiDayRain className={`${size} ${animation} text-blue-500`} />,
        '10n': <WiNightRain className={`${size} ${animation} text-blue-400`} />,
        '11d': <WiThunderstorm className={`${size} ${animation} text-purple-500`} />,
        '11n': <WiThunderstorm className={`${size} ${animation} text-purple-500`} />,
        '13d': <WiSnow className={`${size} ${animation} text-blue-200`} />,
        '13n': <WiSnow className={`${size} ${animation} text-blue-200`} />,
        '50d': <WiFog className={`${size} ${animation} text-gray-400`} />,
        '50n': <WiFog className={`${size} ${animation} text-gray-500`} />
    };

    return iconMap[iconCode] || <WiDaySunny className={`${size} text-yellow-500`} />
}

export default WeatherIcons


// Weather Icon Codes Explained
// Each code consists of:

// 2 digits = Weather condition category

// 1 letter = d (day) or n (night)

// Code	Description	Example Icon
// 01d	Clear sky (day)	☀️
// 01n	Clear sky (night)	🌙
// 02d	Few clouds (day)	🌤
// 02n	Few clouds (night)	☁️🌙
// 03d	Scattered clouds (day/night)	☁️
// 04d	Broken clouds (day/night)	☁️☁️
// 09d	Shower rain (day/night)	🌧
// 10d	Rain (day)	🌦
// 10n	Rain (night)	🌧🌙
// 11d	Thunderstorm (day/night)	⚡
// 13d	Snow (day/night)	❄️
// 50d	Mist/fog (day)	🌫
// 50n	Mist/fog (night)	🌫🌙