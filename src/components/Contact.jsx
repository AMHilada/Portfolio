import React from 'react'

const Contact = () => {
  return (
    <div class="flex justify-center my-5 h-full sm:h-[70vh] items-center" id='contact'>
        <div class="max-w-[1200px] mx-auto">
           
            <div class="grid grid-cols-1 md:grid-cols-2">

                <div class="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                    <h1 class="text-4xl sm:text-5xl text-white">
                    <span>Contact</span> Me
                    </h1>
                    <p class="text-normal text-lg font-medium text-gray-400 mt-2">
                        Let's connect on Facebook <br/> or send me an Email
                    </p>

                    <div class="flex items-center mt-2 text-gray-400">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        >
                            <path d="M3 8l9 6 9-6V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2z" />
                            <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8l9 6 9-6z"/>
                        </svg>
                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                            <p>Arianne Mae Hilada</p>
                        </div>
                    </div>
                </div>

                <form action='https://getform.io/f/panvvgka' method='POST' class="p-6 flex flex-col justify-center max-w-[700px]">
                    <div class="flex flex-col">
                        <input type="name" name="name" id="name" placeholder='Full Name' class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"/>
                    </div>
                    <div class="flex flex-col">
                        <input type="email" name="email" id="email" placeholder='Email' class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"/>
                    </div>
                    <div class="flex flex-col">
                        <input type="message" name="message" id="message" placeholder='Your Message' class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"/>
                    </div>
                    <button type='submit' class="relative bg-primary-color text-white py-3 px-6 rounded-lg mt-3 transition-all duration-200 before:absolute before:inset-0 before:transition-all before:duration-1000 before:opacity-70 before:bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] before:rounded-xl before:blur-lg before:-z-10 before:group-hover:opacity-100 before:group-hover:inset-1 before:group-hover:duration-200 before:animate-tilt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact