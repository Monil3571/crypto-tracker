import React from 'react'

export default function Coin({name, image, price, symbol}) {
  return (
    // <div className='coin flex flex-col items-center justify-center gap-2 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
        <div class="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
{/* //  <div class="bg-gray-800 hover:scale-105 transition-transform duration-300 p-4 rounded-xl shadow-xl border border-gray-700">  */}
        <h1 className='font-bold'> {name}</h1>
        <img className='w-30 h-30 mx-auto' src={image} />
        <h3> Price: {price} USD</h3>
        <h3> Symbol: {symbol}</h3>
</div>
    // </div>
  )
}
