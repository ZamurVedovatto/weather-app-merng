import React from 'react'

export default function Home() {
  const onSearch = () => {
    
  }
  return (
    <div className="home-wrapper">
      <h3>Search Weather</h3>
      <input type="text" placeholder="City name" />
      <button onClick={() => onSearch()}>Search</button>
    </div>
  )
}
