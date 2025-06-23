import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { WeatherProvider } from './context/WeatherContext'
import Home from './pages/Home'
import Footer from './components/Footer';
import Header from './components/Header';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <Header />
        <Home />
        <Footer />
      </WeatherProvider>
    </QueryClientProvider>
  )
}

export default App