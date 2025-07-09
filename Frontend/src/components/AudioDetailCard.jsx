import React from 'react'

const AudioDetailCard = () => {
  return (
    <section className="bg-slate-700 text-white py-36 px-56 flex">
        <div className="bg-slate-400 text-white p-6 rounded-l-lg  w-96 shadow-lg mx-auto">
            {/* Book Image with Label and Bookmark */}
            <div className="relative mb-6">
                <img
                src="/src/assets/image.png"
                alt="Book"
                className="w-full h-56 object-cover rounded-lg"
                />
                {/* Label */}
                {/* <span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 px-2 py-1 text-xs font-bold rounded">
                Label
                </span> */}
                {/* Bookmark Tag */}
                {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 w-4 h-6 rounded-b"></span> */}
            </div>

            {/* Listen Button and Headphone Icon */}
            <div className="flex justify-center space-x-5 items-center mb-4">
                <span className="text-gray-300 text-lg">🎧</span>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold">
                    Listen
                </button>
            </div>

            {/* Rate this Book */}
            <div className='text-center mt-8'>
                <p className="text-sm mb-2">Rate this book:</p>
                <div className="space-x-1 text-yellow-400 text-xl cursor-pointer">
                {[...Array(5)].map((_, i) => (
                    <span key={i}>☆</span>
                ))}
                </div>
            </div>
        </div>
        <div className="mx-auto bg-slate-800 p-8 rounded-r-lg shadow-lg">
            
            {/* Book Title and Author */}
            <h1 className="text-3xl font-bold mb-2">Title of the book</h1>
            <p className="text-lg text-gray-300 mb-4">by Author name</p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
            <span className="text-yellow-400 text-xl">⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-300">(10 ratings)</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Description about the book: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
            <p><span className="text-white font-semibold">Publisher:</span> Publisher name</p>
            <p><span className="text-white font-semibold">Published:</span> June 2025</p>
            <p><span className="text-white font-semibold">Language:</span> English</p>
            <p><span className="text-white font-semibold">Pages:</span> 464</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
            <button className="px-6 py-2 bg-green-600 rounded hover:bg-green-700 transition">Download</button>
            </div>
        </div>
    </section>
    
  )
}

export default AudioDetailCard
