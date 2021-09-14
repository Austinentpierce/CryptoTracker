import React from 'react'

export function App() {
  return (
    <main>
      <header>
        <i className="bitcoin fab fa-4x fa-bitcoin"></i>
        <h1 className="title">Crypto Price Tracker</h1>
        <i className="ethereum fab fa-4x fa-ethereum"></i>
      </header>
      <div className="instructions">
        <h2>Instructions</h2>
        <p>
          This app was created to see current certain Crypto Currency prices and
          the app will update every 10 seconds to see the updated price
        </p>
      </div>
    </main>
  )
}
