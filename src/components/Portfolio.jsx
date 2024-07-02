import React from 'react'
import rfms from "../assets/rfms.png"
import web4 from "../assets/web4.png"
import web3 from "../assets/web3.png"
import calcu from "../assets/calcu.png"

const Portfolio = () => {
  return (
    <div class="py-6 max-w-[1200px] mx-auto" id='portfolio'>
        <div class="mx-auto px-4 md:px-8">
            <div class="mb-4 flex items-center justify-between gap-8">
                <div class="flex flex-col gap-4">
                    <h2 class="text-2xl lg:text-3xl text-white">
                        My <span>Portfolio</span>
                    </h2>
                    <p class="text-gray-500">
                        These are my latest projects.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a href='/' class="group relative h-48 overflow-hidden rounded-lg shadow-lg md:h-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src={rfms} alt="Capstone Project" class="h-full w-full object-center grayscale-img transition duration-200 group-hover:grayscale-100"/>
                    <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 bg-gray-800 text-white text-center transition duration-300 hover:opacity-90">
                        <span class="text-3xl">Capstone Project</span>
                    </div>
                </a>
                <a href='/' class="group relative h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src={web4} alt="A-Vento Project" class="h-full w-full object-center grayscale-img transition duration-200 group-hover:grayscale-100"/>
                    <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 bg-gray-800 text-white text-center transition duration-300 hover:opacity-90">
                        <span class="text-3xl">A-Vento Project</span>
                    </div>
                </a>
                <a href='/' class="group relative h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src={web3} alt="ScrollKit Project" class="h-full w-full object-center grayscale-img transition duration-200 group-hover:grayscale-100"/>
                    <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 bg-gray-800 text-white text-center transition duration-300 hover:opacity-90">
                        <span class="text-3xl">ScrollKit Project</span>
                    </div>
                </a>
                <a href='/' class="group relative h-48 overflow-hidden rounded-lg shadow-lg md:h-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src={calcu} alt="Calculator Project" class="h-full w-full object-center grayscale-img transition duration-200 group-hover:grayscale-100"/>
                    <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 bg-gray-800 text-white text-center transition duration-300 hover:opacity-90">
                        <span class="text-3xl">Calculator Project</span>
                    </div>
                </a>
            </div>


        </div>
    </div>
  )
}

export default Portfolio