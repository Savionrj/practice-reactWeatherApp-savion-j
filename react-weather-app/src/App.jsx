import { useState, useEffect } from 'react'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures.",
  },
  London: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
  },
  Tokyo: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
  },
};

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CityList city={weatherData} />} />
          <Route path='/forecast/:cityName' element={<CityForecast city={weatherData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
