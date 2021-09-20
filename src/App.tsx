import React, { useEffect, useState } from 'react'

export function App() {
  type cryptoCurrencyType = {
    id: string
    rank: number
    symbol: string
    name: string
    supply: number
    maxSupply: number
    marketCapUsd: number
    volumeUsd24hr: number
    priceUsd: number
    changePercent24hr: number
    vwap24hr: number
    explorer: string
  }
  const [cryptoCurrencyData, setCryptoCurrencyData] = useState<
    cryptoCurrencyType[]
  >([])

  function inputData() {
    async function fetchData() {
      const response = await fetch('https://api.coincap.io/v2/assets')
      if (response.ok) {
        const json = await response.json()
        setCryptoData(json.data)
        console.log(json.data)
      }
    }
    fetchData()
  }
  useEffect(loadData, [])

  useEffect(function () {
    setInterval(loadData, 10000)
  }, [])
  return (
    <main>
      <header>
        <i className="bitcoin fab fa-2x fa-bitcoin"></i>
        <h1 className="title">Crypto Currency Price Tracker</h1>
        <i className="ethereum fab fa-2x fa-ethereum"></i>
      </header>
      <div className="instructions">
        <h2 className="headinstruct">Instructions</h2>
        <p>
          This app was created to see current certain Crypto Currency prices and
          the app will update every 10 seconds to see the updated price
        </p>
      </div>
    </main>
  )
}
