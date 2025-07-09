import React from 'react'

const LibrariesPage = () => {
  return (
    <section className="bg-gray-800 text-white pt-48 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Library Header Section */}
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Library 1</h1>
          <img
            src="/assets/library-image.png"
            alt="Library"
            className="w-full h-64 object-cover rounded mb-6"
          />
          <p className="text-sm text-gray-300 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <p><span className="font-semibold text-white">Location:</span> AA</p>
            <p><span className="font-semibold text-white">Books:</span> 100</p>
          </div>
        </div>

        {/* Available Books Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">📚 Available Books</h2>

          {/* Fiction Category */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fiction</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map(num => (
                <div key={num} className="bg-slate-700 p-4 rounded-lg shadow hover:scale-105 transition-transform text-center">
                  <img
                    src={`/assets/fiction${num}.png`}
                    alt={`Book ${num}`}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <p className="text-sm text-gray-300">Book {num}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comedy Category */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Comedy</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map(num => (
                <div key={num} className="bg-slate-700 p-4 rounded-lg shadow hover:scale-105 transition-transform text-center">
                  <img
                    src={`/assets/comedy${num}.png`}
                    alt={`Book ${num}`}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <p className="text-sm text-gray-300">Book {num}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LibrariesPage
