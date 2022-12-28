import React from 'react';

function Section() {
  return (
    <div className="section">
      <div class="grid grid-rows-3 grid-flow-col gap-4 bg-slate-300 ">
        <div className="row-start-1 row-span-2 mt-4 "><h1 className='text-bold text-6xl font-extrabold font-serif'>The Bright Future of Web 3.0?</h1></div>

        <div class="row-start-1 row-span-1 mt-4 font-serif font-medium text-gray-500 "><p>We dive into the next evolution of the web that calims to put the power of the plateforms back into the hands of the people.But is it reality fulfilling its promise? As a sole design system maintainer.</p><button class=" btn mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold h-30 w-40 text-center py-2 px-4 rounded-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Read More</button>
        </div>


        <div class="row-start-1 row-end-3 h-88 mt-4 bg-blue-900 "><h1 className=" text-orange-500 text-3xl font-bold ">New</h1><h3 className="mt-4 text-white font-bold">Hydrogen VS Electric Cars</h3><p className="mt-1 text-bold font-semibold "> Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className='mt-4'></hr>

          <h1 className="font-bold text-white  mt-3">The Downside of AI Artistry</h1>
          <p className="mt-3 text-bold font-semibold ">What are the possible adverse effects of on-demand AI image generation?</p><hr className='mt-3'></hr>

          <h1 className='mt-3 text-white font-bold'>Is VC Funcding Drying Up?</h1><p className='text-bold mt-3 mb-5 font-semibold'>Private funding by VC films is down 50%YOY. We take a look at what that means.</p>
        </div>
      </div>



    </div>
  )
}

export default Section;