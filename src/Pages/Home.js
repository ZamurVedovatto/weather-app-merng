import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from './../graphql/Queries'

export default function Home() {
  const [city, setCity] = useState('')
  const [getWeather, {loading, data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: city}
  })

  if (error) return <p>error found</p>
  if (loading) return <p>loading...</p>
  if (data) {
    console.log(data)
  }
  
  return (
    <div className="home-wrapper">
      <h3>Search Weather</h3>
      <input type="text" placeholder="City name" onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => getWeather()}>Search</button>
    </div>
  )
}
