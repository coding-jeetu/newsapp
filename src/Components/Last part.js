import React from 'react';
import gameimage from './image/game.jpg';
import image from './image/keyboard.jpg';
import handimage from './image/hand.jpg';

function Lastpart() {
  return (
    <div className="LastPart">
        <div className="grid grid-cols-3 grid-flow-col gap-20 bg-slate-300">
        <div className='row-start-1 row-span-1 '><img src={gameimage} className="w-30 h-30 ml-1" alt="game"/><h1 className='text-gray-400 text-4xl'>01</h1><h2 className='font-bold mt-2'>Reviving Retro PCs</h2><p className='mt-2 text-gray-500'>What happens when old PCs are given modern upgrades?</p></div>

        <div className='row-start-1 row-end-2 row-span-3'><img src={image} className="w-30 h-30 ml-12" alt="keyboard"/><h1 className=':ml-5 text-gray-400 text-4xl ml-11'>02</h1><h2 className='ml-11 font-bold mt-2'>Top 10 Laptops of 2022</h2><p className='ml-11 text-gray-500 mt-2'>Our best picks for various needs and budgets.</p></div>

        <div className='row-start-1 row-end-2 row-span-2 '><img src={handimage} className="w-30 h-30 ml-3 " alt="hands"/><h1 className='text-gray-400 text-5xl mr-9 ml-5 mt-1 '>03</h1><h2 className='ml-6 mt-2 font-bold'>The Growth of Gaming</h2><p className='ml-6 text-gray-500 text-bold mt-2 '>How the pandemic has sparked fresh opportunities.</p></div>
        </div>
    </div>
  )
}

export default Lastpart;