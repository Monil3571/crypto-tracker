import React from 'react'
import Coin from './Coin';
export default function CryptoDisplay({listOfCoins}) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 ">

      {listOfCoins.map((coin) => {
        return (
          <Coin
          name={coin.name}
          image={coin.image}
          price={coin.current_price}
          symbol={coin.symbol}
          />
        );
      })}
      </div>
    </div>
  )
}
