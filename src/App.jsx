import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { WeatherProvider } from './context/WeatherContext'
import Home from './pages/Home'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </QueryClientProvider>
  )
}

export default App